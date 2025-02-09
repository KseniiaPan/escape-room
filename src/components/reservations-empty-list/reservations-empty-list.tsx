
import styles from './reservations-empty-list.module.css';

function ReservationsEmptyList(): JSX.Element {
  return (
    <div className={styles.container}>
      Нет актуальных бронирований
    </div>
  );
}

export default ReservationsEmptyList;
