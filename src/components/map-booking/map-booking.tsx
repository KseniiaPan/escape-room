import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {LatLngExpression} from 'leaflet';
import {MAP_ZOOM} from '../../consts';
import {QuestBookingInfo} from '../../types/quests-types';
import MapMarkers from '../../components/map-markers/map-markers';

type MapBookingProps = {
  questLocations: QuestBookingInfo[];
  centerCoords: LatLngExpression;
  onActiveQuestLocationChange: (id: string) => void;
};

function MapBooking({questLocations, centerCoords, onActiveQuestLocationChange}: MapBookingProps): JSX.Element {
  return (
    <MapContainer center={centerCoords} zoom={MAP_ZOOM} scrollWheelZoom={false} style={{height : '100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarkers questLocations={questLocations} onActiveQuestLocationChange={onActiveQuestLocationChange}/>
    </MapContainer>
  );
}
export default MapBooking;

