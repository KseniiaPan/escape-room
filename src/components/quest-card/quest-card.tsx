import {Quest} from '../../types/quests-types';
import {getQuestLevelRuName} from '../../utils/common';

type QuestCardProps = {
  quest: Quest;
}

function QuestCard({quest}:QuestCardProps): JSX.Element {
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
          <a className="quest-card__link" href="quest.html">
            {quest.title}
          </a>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {`${quest.peopleMinMax[0]}-${quest.peopleMinMax[1]}`}&nbsp;чел
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
