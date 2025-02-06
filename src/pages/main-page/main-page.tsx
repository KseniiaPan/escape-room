import {useState} from 'react';
import QuestsFiltersContainer from '../../components/quests-filters-container/quests-filters-container';
import QuestCardsList from '../../components/quest-cards-list/quest-cards-list';
import {Quest} from '../../types/quests-types';

type MainPageProps = {
  quests: Quest[];
}
function MainPage({quests}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleActiveCardChange = (id: string | null) => {
    if (id !== activeCard) {
      setActiveCard(id);
    }
  };
  return (
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">
          квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">
          Выберите тематику
          </h2>
        </div>
        <div className="page-content__item">
          <QuestsFiltersContainer />
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <QuestCardsList quests={quests} onActiveCardChange={handleActiveCardChange}/>
      </div>
    </main>
  );
}
export default MainPage;
