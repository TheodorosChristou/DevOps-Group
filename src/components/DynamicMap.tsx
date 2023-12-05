import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import the icon image
import markIcon from '../../public/img/mark.ico';


//Takes an array of markers to display on the map
export default function DynamicMap({ mapData }) {
  //Custom Icon,(work around the default one which is currently broken)
  const customIcon = new L.Icon({
    iconUrl: markIcon.src,
    iconSize: [78, 64],
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-screen h-screen" data-test='map-item'>
        {/* Map Rendering */}
        <MapContainer style={{ width: '100%', height: '100%' }} center={[32.5072, 12.1276]} zoom={10} scrollWheelZoom={true}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            {/* Rendering a marker for each datapoint in the mapData array */}
            {/* we assign a unique key to each datapoint using their _id */}
          {mapData.map((dataPoint) => (
            <Marker position={[dataPoint.Lat, dataPoint.Lon]} icon={customIcon} key={dataPoint._id}>
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
