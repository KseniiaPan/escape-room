import {QuestBookingForm} from '../../types/quests-types';
type BookingFormContactsProps = {
  formData: QuestBookingForm;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLElement>;
  onCkeckboxValueChange: React.ChangeEventHandler<HTMLElement>;
}

function BookingFormContacts({formData, isChecked, onChange, onCkeckboxValueChange}:BookingFormContactsProps): JSX.Element {
  return (
    <fieldset className="booking-form__section">
      <legend className="visually-hidden">Контактная информация</legend>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="name">
  Ваше имя
        </label>
        <input
          type="text"
          id="name"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={onChange}
          placeholder="Имя"
          required
          pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
        />
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="tel">
  Контактный телефон
        </label>
        <input
          type="tel"
          id="tel"
          name="phone"
          value={String(formData.phone)}
          onChange={onChange}
          placeholder="Телефон"
          required
          pattern="[0-9]{10,}"
        />
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="person">
  Количество участников
        </label>
        <input
          type="number"
          id="person"
          name="peopleCount"
          value={Number(formData.peopleCount)}
          onChange={onChange}
          placeholder="Количество участников"
          required
        />
      </div>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
        <input
          type="checkbox"
          id="children"
          name="withChildren"
          checked={isChecked}
          onChange={onCkeckboxValueChange}
        />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">
  Со&nbsp;мной будут дети
        </span>
      </label>
    </fieldset>
  );
}
export default BookingFormContacts;
