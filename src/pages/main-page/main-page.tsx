import {useState} from 'react';
import QuestsFiltersContainer from '../../components/quests-filters-container/quests-filters-container';
import QuestCardsList from '../../components/quest-cards-list/quest-cards-list';
import {Quest} from '../../types/quests-types';
import {useAppSelector} from '../../hooks/index';
import {getCurrentQuestTheme, getCurrentQuestLevel} from '../../store/app-process/selectors';
import {questThemes, questLevels} from '../../consts';

type MainPageProps = {
  quests: Quest[];
}
function MainPage({quests}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const currentQuestTheme = useAppSelector(getCurrentQuestTheme);
  const currentQuestLevel = useAppSelector(getCurrentQuestLevel);

  const filteredQuestsByTheme = quests.filter((quest) => quest.type === currentQuestTheme);
  const questsByTheme = currentQuestTheme === questThemes[0].name ? quests : filteredQuestsByTheme;
  const questsByLevel = questsByTheme.filter((quest) => quest.level === currentQuestLevel);
  const displayedQuests = currentQuestLevel === questLevels[0].name ? questsByTheme : questsByLevel;

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
        <QuestCardsList quests={displayedQuests} onActiveCardChange={handleActiveCardChange}/>
      </div>
    </main>
  );
}
export default MainPage;
