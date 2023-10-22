import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

//Basic Map using leaflet react for now
export default function DynamicMap (){
    return (
<div className="fixed inset-0 flex items-center justify-center">
  <div className="w-screen h-screen">
    <MapContainer style={{ width: '100%', height: '100%' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
</div>

    
      );
};

