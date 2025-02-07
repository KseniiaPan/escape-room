import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {mainAddressCoords, MAP_ZOOM, MapIcon} from '../../consts';

function Map(): JSX.Element {
  return (
    <MapContainer center={mainAddressCoords} zoom={MAP_ZOOM} scrollWheelZoom={false} style={{height : '100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mainAddressCoords} icon={icon(MapIcon.Active)}/>
    </MapContainer>
  );
}
export default Map;

