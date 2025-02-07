import BookingFormContacts from '../../components/booking-form-contacts/booking-form-contacts';
import BookingFormDate from '../../components/booking-form-date/booking-form-date';
import {QuestBookingInfo} from '../../types/quests-types';


type QuestBookingPageProps = {
  questInfo: QuestBookingInfo;
}

function BookingForm({questInfo}:QuestBookingPageProps): JSX.Element {

  return(
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
    >
      <BookingFormDate slots={questInfo.slots}/>
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
  );
}
export default BookingForm;
