import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import the icon image
import markIcon from '../../public/img/mark.ico';

// Takes an array of markers to display on the map
export default function DynamicMap({ mapData }) {
  // Custom Icon, (work around the default one which is currently broken)
  const customIcon = new L.Icon({
    iconUrl: markIcon.src,
    iconSize: [78, 64],
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-full h-full">
        {/* Map Rendering */}
        <MapContainer style={{ width: '100%', height: '100%' }} center={[32.5072, 12.1276]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Rendering a marker for each datapoint in the mapData array */}
          {/* We assign a unique key to each datapoint using their _id */}
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
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
