import { Marker } from 'react-leaflet';
import {icon} from 'leaflet';
import {QuestBookingInfo} from '../../types/quests-types';
import {MapIcon} from '../../consts';

type MapMarkersProps = {
  questLocations: QuestBookingInfo[];
  onActiveQuestLocationChange: (id: string) => void;
}
function MapMarkers({questLocations, onActiveQuestLocationChange}:MapMarkersProps) {
  return (
    questLocations.map((questLocation) => (
      <Marker
        key={questLocation.id}
        position={questLocation.location.coords}
        icon={icon(MapIcon.Active)}
        eventHandlers={{
          click: () => {
            onActiveQuestLocationChange(questLocation.id);
          },
        }}
      >
      </Marker>))
  );
}
export default MapMarkers;
