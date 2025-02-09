import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {AppRoute} from '../../consts';
import {getQuestThemeRuName, getQuestLevelRuName} from '../../utils/common';
import LoadingPage from '../../pages/loading-page/loading-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {fetchQuestDataAction} from '../../store/api-actions';
import {getFullQuestLoadingStatus, getFullQuestData} from '../../store/full-quest-process/selectors';

function QuestPage(): JSX.Element {

  const isFullQuestLoading = useAppSelector(getFullQuestLoadingStatus);
  const currentQuestData = useAppSelector(getFullQuestData);

  const params = useParams();
  const activeQuestId = params.id;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activeQuestId) {
      dispatch(fetchQuestDataAction(activeQuestId));
    }
  }, [activeQuestId, dispatch]);

  if (isFullQuestLoading) {
    return (
      <LoadingPage />
    );
  }

  if (!isFullQuestLoading && currentQuestData) {
    const {coverImg, coverImgWebp, type, peopleMinMax, level, description, title} = currentQuestData;
    const currentQuestTheme = getQuestThemeRuName(type);
    const currentQuestLevel = getQuestLevelRuName(level);

    return (
      <main className="decorated-page quest-page">
        <Helmet>
          <title>Квест - Escape Room</title>
        </Helmet>
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              src={coverImgWebp}
            />
            <img
              src={coverImg}
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{currentQuestTheme}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {`${peopleMinMax[0]}-${peopleMinMax[1]}`}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {currentQuestLevel}
              </li>
            </ul>
            <p className="quest-page__description">
              {description}
            </p>
            {activeQuestId &&
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={AppRoute.QuestBooking.replace(':id', activeQuestId)}
            >
          Забронировать
            </Link>}
          </div>
        </div>
      </main>
    );
  }
  return (<NotFoundPage />);
}

export default QuestPage;
