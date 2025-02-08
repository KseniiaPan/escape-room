import {useForm} from 'react-hook-form';
import {QuestBookingForm} from '../../types/quests-types';

type BookingFormContactsProps = {
  formData: QuestBookingForm;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLElement>;
  onCkeckboxValueChange: React.ChangeEventHandler<HTMLElement>;
}

function BookingFormContacts({formData, isChecked, onChange, onCkeckboxValueChange}:BookingFormContactsProps): JSX.Element {
  const {register, formState: {errors}} = useForm<QuestBookingForm>();

  return (
    <fieldset className="booking-form__section">
      <legend className="visually-hidden">Контактная информация</legend>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="name">
  Ваше имя
        </label>
        <input
          type="text"
          {...register('contactPerson', {
            required: 'Укажите имя',
            pattern: {
              value: /^[а-яА-ЯёЁa-zA-Z'-]+ ?[а-яА-ЯёЁa-zA-Z'-]+ ?[а-яА-ЯёЁa-zA-Z'-]{1,15}$/,
              message: 'Валидное имя должно состоять из 1-15 букв кириллицы или латиницы'
            }
          })}
          id="name"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={onChange}
          placeholder="Имя"
        />
        {errors.contactPerson && <><br/><span role="alert">{errors.contactPerson?.message}</span></>}
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="tel">
  Контактный телефон
        </label>
        <input
          type="tel"
          {...register('phone', {
            required: 'Укажите номер телефона',
            pattern: {
              value: /^\+7\s\(([0-9]{3})\)\s\d{3}-\d{2}-\d{2}$/,
              message: 'Введите номер формата +7 (000) 000-00-00 (Ру-формат)'
            }
          })}
          id="tel"
          name="phone"
          value={String(formData.phone)}
          onChange={onChange}
          placeholder="Телефон"
        />
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="person">
  Количество участников
        </label>
        <input
          type="number"
          {...register('peopleCount', {
            required: 'Укажите количество участников',
          })}
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
