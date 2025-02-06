import {Link} from 'react-router-dom';
import {Quest} from '../../types/quests-types';
import {getQuestLevelRuName} from '../../utils/common';
import {AppRoute} from '../../consts';

type QuestCardProps = {
  quest: Quest;
  onActiveCardChange?: (id: string | null) => void;
}

function QuestCard({quest, onActiveCardChange}:QuestCardProps): JSX.Element {
  const {id, previewImgWebp, previewImg, title, peopleMinMax, level} = quest;
  const currentQuestLevel = getQuestLevelRuName(level);

  return (
    <div className="quest-card"
      onMouseEnter={() => onActiveCardChange && onActiveCardChange(id)}
      onMouseLeave={() => onActiveCardChange && onActiveCardChange(null)}
    >
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            src={previewImgWebp}
          />
          <img
            src={previewImg}
            width={344}
            height={232}
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={AppRoute.Quest.replace(':id', id)}>
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
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
      </div>
    </div>
  );
}

export default QuestCard;
