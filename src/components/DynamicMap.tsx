import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import the icon image
import markIcon from '../../public/img/mark.ico';

// Define a custom icon
const customIcon = new L.Icon({
  iconUrl: markIcon.src, // Convert StaticImageData to string URL
  iconSize: [78, 64], // Set your desired icon size
});
//Basic Map using leaflet react for now
export default function DynamicMap (){
    return (
<div className="fixed inset-0 flex items-center justify-center">
  <div className="w-screen h-screen">
    <MapContainer style={{ width: '100%', height: '100%' }} center={[37.9838, 23.7275]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.9838, 23.7275]} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
</div>



      );
};

