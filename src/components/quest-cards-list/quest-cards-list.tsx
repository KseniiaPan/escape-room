import QuestCard from '../quest-card/quest-card';
import {Quest} from '../../types/quests-types';

type QuestCardsListProps = {
  quests: Quest[];
}

function QuestCardsList({quests}:QuestCardsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {
        quests.map((quest) => (
          <QuestCard
            key={quest.id}
            quest={quest}
          />))
      }
    </div>
  );
}

export default QuestCardsList;
