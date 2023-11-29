import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markIcon from '../../public/img/mark.ico';
import userIcon from '../../public/img/user.ico';
import { AdvancedImage } from '@cloudinary/react';
import useCloudinary from "@/hooks/useCloudinary";
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { useTranslation } from 'react-i18next';



export default function DynamicMap({ mapData }) {
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);
  const [isDefaultLocation, setIsDefaultLocation] = useState<boolean>(false);

  const {t} = useTranslation();

  const {Cloudinary} = useCloudinary();

  // Custom Icon for other markers
  const customIcon = new L.Icon({
    iconUrl: markIcon.src,
    iconSize: [78, 64],
  });

  // Custom Icon for the user's marker
  const newUserIcon = new L.Icon({
    iconUrl: userIcon.src,
    iconSize: [32, 32],
  });

  useEffect(() => {
    const handlePermission = async () => {
      // Check if geolocation is supported
      if ('geolocation' in navigator) {
        // Ask for permission
        const permissionGranted = window.confirm(t("dynamicmap.prompt"));
        
        if (permissionGranted) {
          try {
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const { latitude, longitude } = position.coords;
            setUserLocation([latitude, longitude]);
          } catch (error: any) { // Explicitly type error
            console.error(t("dynamicmap.erroruserlocation") + ' ' + error.message);
            setUserLocation([51.5072, 0.1276]); // Use default coordinates if there is an error
            setIsDefaultLocation(true);
          }
        } else {
          setUserLocation([51.5072, 0.1276]); // Use default coordinates if permission is denied
          setIsDefaultLocation(true);
        }
      } else {
        console.error(t("dynamicmap.nosupport"));
        setUserLocation([51.5072, 0.1276]); // Use default coordinates if geolocation is not supported
        setIsDefaultLocation(true);
      }
    };

    handlePermission();
  }, []);

  const SetViewOnMap = () => {
    const map = useMap();
    if (userLocation) {
      map.setView(userLocation, 16);
    }
    return null;
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-screen h-screen">
        {/* Map Rendering */}
        <MapContainer
          style={{ width: '100%', height: '100%' }}
          center={userLocation || [51.5072, 0.1276]}
          zoom={16}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Rendering a marker for each datapoint in the mapData array */}
          {mapData.map((dataPoint) => (
            <Marker position={[dataPoint.Lat, dataPoint.Lon]} icon={customIcon} key={dataPoint._id}>
            {((dataPoint.Photos?.[0] != null) && (
              <Popup>
                <div>{dataPoint.City} - {dataPoint.Description}</div>
                <div className="mt-2 flex justify-center"><AdvancedImage className="border-2 border-black mr-1" cldImg={Cloudinary.image(dataPoint.Photos[0]).resize(thumbnail().width(200).height(200))}/></div>
              </Popup>
            ))}
            {((dataPoint.Photos?.[0] == null) && (
              <Popup>
                {dataPoint.City} - {dataPoint.Description}
              </Popup>
            ))}
            </Marker>
          ))}
           {/* Rendering a marker for the user with the new user icon only when permission is granted and not at the hardcoded coordinates */}
           {userLocation !== null && !isDefaultLocation && (
            <Marker position={userLocation} icon={newUserIcon}>
              {/* Popup for enabling location access */}
              <Popup className="text-white p-4 rounded-md">
                <div>
                  <h3>
                    {t("index.lat")}: {userLocation[0].toFixed(6)}, {t("index.lon")}: {userLocation[1].toFixed(6)}
                  </h3>
                </div>
              </Popup>
            </Marker>
          )}
          <SetViewOnMap />
        </MapContainer>
      </div>
    </div>
  );
}