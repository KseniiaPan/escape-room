import QuestCard from '../quest-card/quest-card';
import {Quest} from '../../types/quests-types';

type QuestCardsListProps = {
  quests: Quest[];
  onActiveCardChange?: (id: string | null) => void;
}

function QuestCardsList({quests, onActiveCardChange}:QuestCardsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {
        quests.map((quest) => (
          <QuestCard
            key={quest.id}
            quest={quest}
            onActiveCardChange={onActiveCardChange}
          />))
      }
    </div>
  );
}

export default QuestCardsList;
