import {Link} from 'react-router-dom';
import {QuestResevation} from '../../types/quests-types';
import {getQuestLevelRuName} from '../../utils/common';
import {AppRoute} from '../../consts';

type ReservationCardProps = {
  reservation: QuestResevation;
}

function ReservationCard({reservation}:ReservationCardProps): JSX.Element {
  const {quest, date, time, location, peopleCount} = reservation;
  const currentQuestLevel = getQuestLevelRuName(quest.level);

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            src={quest.previewImgWebp}
          />
          <img
            src={quest.previewImg}
            width={344}
            height={232}
            alt={quest.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={AppRoute.Quest.replace(':id', quest.id)}>
            {quest.title}
          </Link>
          <span className="quest-card__info">
            {`${date},&nbsp;${time} ${location.address}`}
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {currentQuestLevel}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
        >
      Отменить
        </button>
      </div>
    </div>
  );


}

export default ReservationCard;
