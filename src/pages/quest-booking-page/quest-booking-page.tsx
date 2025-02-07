import {useState} from 'react';
import BookingForm from '../../components/booking-form/booking-form';
import MapBooking from '../../components/map-booking/map-booking';
import {QuestBookingInfo} from '../../types/quests-types';
import {defaultSpbCoords} from '../../consts';


type QuestBookingPageProps = {
  bookingInfo: QuestBookingInfo[];
}

function QuestBookingPage({bookingInfo}:QuestBookingPageProps): JSX.Element {

  const [activeQuestLocation, setActiveQuestLocation] = useState<string | null>(null);
  const handleActiveQuestLocationChange = (id: string) => {
    if (id !== activeQuestLocation) {
      setActiveQuestLocation(id);
    }
  };

  const chosenQuestInfo = activeQuestLocation && bookingInfo.find((bookingInfoItem) => bookingInfoItem.id === activeQuestLocation);
  const displayedQuestInfo = chosenQuestInfo || bookingInfo[0];

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width={1366}
            height={1959}
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">
          Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">
          Маньяк
          </p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <div className="map__container">
                <MapBooking questLocations={bookingInfo} centerCoords={defaultSpbCoords} onActiveQuestLocationChange={handleActiveQuestLocationChange}/>
              </div>
            </div>
            <p className="booking-map__address">
            Вы&nbsp;выбрали: {displayedQuestInfo.location.address}
            </p>
          </div>
        </div>
        <BookingForm questInfo={displayedQuestInfo}/>
      </div>
    </main>
  );
}
export default QuestBookingPage;
