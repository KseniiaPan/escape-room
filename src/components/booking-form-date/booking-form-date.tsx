import {QuestTimeSlots, QuestBookingForm} from '../../types/quests-types';

type BookingFormDateProps = {
  slots: QuestTimeSlots;
  formData: QuestBookingForm;
  onChange: React.ChangeEventHandler<HTMLElement>;
}

function BookingFormDate({slots, formData, onChange}: BookingFormDateProps): JSX.Element {

  return (
    <fieldset className="booking-form__section">
      <legend className="visually-hidden">Выбор даты и времени</legend>
      <fieldset className="booking-form__date-section">
        <legend className="booking-form__date-title">Сегодня</legend>
        <div className="booking-form__date-inner-wrapper">
          {slots.today.map((slot) => (
            <label className="custom-radio booking-form__date" key={slot.time}>
              <input
                type="radio"
                id={`today${slot.time}`}
                name="date"
                required
                value={formData.date && formData.time && `${formData.date}${formData.time}}`}
                onChange={onChange}
                data-day = 'today'
                data-time={slot.time}
                disabled={!slot.isAvailable}
              />
              <span className="custom-radio__label">{slot.time}</span>
            </label>
          ))}

        </div>
      </fieldset>
      <fieldset className="booking-form__date-section">
        <legend className="booking-form__date-title">Завтра</legend>
        <div className="booking-form__date-inner-wrapper">
          {slots.tomorrow.map((slot) => (
            <label className="custom-radio booking-form__date" key={slot.time}>
              <input
                type="radio"
                id={`tomorrow${slot.time}`}
                name="date"
                required
                value={formData.date && formData.time && `${formData.date}${formData.time}}`}
                onChange={onChange}
                data-day = 'tomorrow'
                data-time={slot.time}
                disabled={!slot.isAvailable}
              />
              <span className="custom-radio__label">{slot.time}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </fieldset>
  );
}
export default BookingFormDate;
