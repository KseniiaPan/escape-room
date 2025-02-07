import {useState} from 'react';
import BookingFormContacts from '../../components/booking-form-contacts/booking-form-contacts';
import BookingFormDate from '../../components/booking-form-date/booking-form-date';
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
            Вы&nbsp;выбрали: {chosenQuestInfo ? chosenQuestInfo.location.address : bookingInfo[0].location.address}
            </p>
          </div>
        </div>
        <form
          className="booking-form"
          action="https://echo.htmlacademy.ru/"
          method="post"
        >
          <BookingFormDate slots={chosenQuestInfo ? chosenQuestInfo.slots : bookingInfo[0].slots}/>
          <BookingFormContacts/>
          <button
            className="btn btn--accent btn--cta booking-form__submit"
            type="submit"
          >
          Забронировать
          </button>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
            <input
              type="checkbox"
              id="id-order-agreement"
              name="user-agreement"
              required
            />
            <span className="custom-checkbox__icon">
              <svg width={20} height={17} aria-hidden="true">
                <use xlinkHref="#icon-tick" />
              </svg>
            </span>
            <span className="custom-checkbox__label">
            Я&nbsp;согласен с
              <a className="link link--active-silver link--underlined" href="#">
              правилами обработки персональных данных
              </a>
            &nbsp;и пользовательским соглашением
            </span>
          </label>
        </form>
      </div>
    </main>
  );
}
export default QuestBookingPage;
