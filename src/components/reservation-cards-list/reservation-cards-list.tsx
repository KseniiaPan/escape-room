import ReservationCard from '../../components/reservation-card/reservation-card';
import {QuestResevation} from '../../types/quests-types';

type RservationCardsListProps = {
  reservations: QuestResevation[];
}

function RservationCardsList({reservations}:RservationCardsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {
        reservations.map((reservation) => (
          <ReservationCard
            key={reservation.id}
            reservation={reservation}
          />))
      }
    </div>
  );
}

export default RservationCardsList;
