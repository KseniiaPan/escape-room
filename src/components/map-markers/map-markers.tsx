import { Marker } from 'react-leaflet';
import {icon} from 'leaflet';
import {CurrentQuestLocation} from '../../types/quests-types';
import {MapIcon} from '../../consts';

type MapMarkersProps = {
  questLocations: CurrentQuestLocation[];
  activeLocationId: string | null;
  onActiveQuestLocationChange?: (id: string) => void;
}
function MapMarkers({questLocations, activeLocationId, onActiveQuestLocationChange}:MapMarkersProps) {
  return (
    questLocations.map((questLocation) => (
      <Marker
        key={questLocation.id}
        position={questLocation.location.coords}
        icon={questLocation.id === activeLocationId ? icon(MapIcon.Active) : icon(MapIcon.Default)}
        eventHandlers={{
          click: () => {
            if(onActiveQuestLocationChange) {
              onActiveQuestLocationChange(questLocation.id);
            }
          },
        }}
      >
      </Marker>))
  );
}
export default MapMarkers;
