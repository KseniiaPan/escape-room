import {useForm, SubmitHandler} from 'react-hook-form';
import BookingFormContacts from '../../components/booking-form-contacts/booking-form-contacts';
import BookingFormDate from '../../components/booking-form-date/booking-form-date';
import {QuestBookingInfo} from '../../types/quests-types';
import {ChangeEvent, useState} from 'react';
import {QuestBookingForm} from '../../types/quests-types';

type QuestBookingPageProps = {
  questInfo: QuestBookingInfo;
}

const initialState: QuestBookingForm = {
  date: '',
  time: '',
  contactPerson: '',
  phone: '',
  peopleCount: undefined,
};

function BookingForm({questInfo}:QuestBookingPageProps) {
  const {handleSubmit } = useForm<QuestBookingForm>();

  const [formData, setFormData] = useState<QuestBookingForm>(initialState);
  const [checked, setChecked] = useState<boolean>(true);

  const handleValueChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {value, dataset, name} = evt.target;
    setFormData(name === 'date' ? {...formData, date: dataset.day, time: dataset.time} : {...formData, [name]: value});
  };

  const handleCheckboxValueChange = () => setChecked(!checked);

  const onSubmit: SubmitHandler<QuestBookingForm> = (data) => console.log(data);

  return(
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
    >
      <BookingFormDate slots={questInfo.slots} formData={formData} onChange={handleValueChange}/>
      <BookingFormContacts formData={formData} onChange={handleValueChange} onCkeckboxValueChange={handleCheckboxValueChange} isChecked={checked}/>
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
