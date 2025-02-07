import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {LatLngExpression} from 'leaflet';
import {MAP_ZOOM} from '../../consts';
import {CurrentQuestLocation} from '../../types/quests-types';
import MapMarkers from '../map-markers/map-markers';

type MapProps = {
  questLocations: CurrentQuestLocation[];
  centerCoords: LatLngExpression;
  activeLocationId: string| null;
  onActiveQuestLocationChange?: (id: string) => void;
};

function Map({questLocations, centerCoords, activeLocationId, onActiveQuestLocationChange}: MapProps): JSX.Element {
  return (
    <MapContainer center={centerCoords} zoom={MAP_ZOOM} scrollWheelZoom={false} style={{height : '100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarkers questLocations={questLocations} activeLocationId={activeLocationId} onActiveQuestLocationChange={onActiveQuestLocationChange}/>
    </MapContainer>
  );
}
export default Map;

