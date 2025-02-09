import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/index';
import {getReservations, getReservationsDataLoadingStatus} from '../../store/booking-process/selectors';
import LoadingPage from '../../pages/loading-page/loading-page';
import RservationCardsList from '../../components/reservation-cards-list/reservation-cards-list';
import ReservationsEmptyList from '../../components/reservations-empty-list/reservations-empty-list';
import NotFoundPage from '../not-found-page/not-found-page';

function MyQuestsPage(): JSX.Element {

  const reservations = useAppSelector(getReservations);
  const isReservationsLoading = useAppSelector(getReservationsDataLoadingStatus);

  if (isReservationsLoading) {
    return (
      <LoadingPage />
    );
  }
  if (!isReservationsLoading && reservations) {
    return (
      <main className="page-content decorated-page">
        <Helmet>
          <title>Мои бронирования - Escape Room</title>
        </Helmet>
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
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
          Мои бронирования
            </h1>
          </div>
          {reservations.length > 0 ?
            reservations && <RservationCardsList reservations={reservations}/> :
            <ReservationsEmptyList />}
        </div>
      </main>
    );
  }
  return <NotFoundPage/>;
}
export default MyQuestsPage;
