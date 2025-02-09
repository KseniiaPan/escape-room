import {Helmet} from 'react-helmet-async';
import {useState, useEffect} from 'react';
import BookingForm from '../../components/booking-form/booking-form';
import Map from '../../components/map/map';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import {defaultSpbCoords} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {getFullQuestData} from '../../store/full-quest-process/selectors';
import {getBookingData, getBookingDataLoadingStatus} from '../../store/booking-process/selectors';
import {fetchBookingDataAction} from '../../store/api-actions';

function QuestBookingPage(): JSX.Element {
  const [activeQuestLocation, setActiveQuestLocation] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const currentQuestData = useAppSelector(getFullQuestData);
  const bookingData = useAppSelector(getBookingData);
  const isBookingDataLoading = useAppSelector(getBookingDataLoadingStatus);

  useEffect(() => {
    if (currentQuestData) {
      dispatch(fetchBookingDataAction(currentQuestData.id));
    }
  }, [currentQuestData, dispatch]);

  const handleActiveQuestLocationChange = (id: string) => {
    if (id !== activeQuestLocation) {
      setActiveQuestLocation(id);
    }
  };

  if (isBookingDataLoading) {
    return (
      <LoadingPage />
    );
  }
  if (!isBookingDataLoading && bookingData) {
    const chosenQuestInfo = activeQuestLocation && bookingData.find((bookingDataItem) => bookingDataItem.id === activeQuestLocation);
    const displayedQuestInfo = chosenQuestInfo || bookingData[0];
    const questLocations = bookingData.map(({id, location}) => ({id, location}));

    return (
      <main className="page-content decorated-page">
        <Helmet>
          <title>Бронирование квеста - Escape Room</title>
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
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
          Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {currentQuestData && currentQuestData.title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  <Map questLocations={questLocations} centerCoords={defaultSpbCoords} activeLocationId={activeQuestLocation} onActiveQuestLocationChange={handleActiveQuestLocationChange}/>
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
  return <NotFoundPage/>;
}

export default QuestBookingPage;
