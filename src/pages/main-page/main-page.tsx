import {Helmet} from 'react-helmet-async';
import QuestsFiltersContainer from '../../components/quests-filters-container/quests-filters-container';
import QuestCardsList from '../../components/quest-cards-list/quest-cards-list';
import QuestCardsEmptyList from '../../components/quest-cards-empty-list/quest-cards-empty-list';
import LoadingPage from '../loading-page/loading-page';
import {useAppSelector} from '../../hooks/index';
import {getCurrentQuestTheme, getCurrentQuestLevel} from '../../store/app-process/selectors';
import {questThemes, questLevels} from '../../consts';
import {getQuestsData, getQuestsLoadingStatus} from '../../store/quests-process/selectors';

function MainPage(): JSX.Element {
  const quests = useAppSelector(getQuestsData);
  const currentQuestTheme = useAppSelector(getCurrentQuestTheme);
  const currentQuestLevel = useAppSelector(getCurrentQuestLevel);
  const isDataLoading = useAppSelector(getQuestsLoadingStatus);

  const filteredQuestsByTheme = quests.filter((quest) => quest.type === currentQuestTheme);
  const questsByTheme = currentQuestTheme === questThemes[0].name ? quests : filteredQuestsByTheme;
  const questsByLevel = questsByTheme.filter((quest) => quest.level === currentQuestLevel);
  const displayedQuests = currentQuestLevel === questLevels[0].name ? questsByTheme : questsByLevel;

  if (isDataLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <main className="page-content">
      <Helmet>
        <title>Escape Room</title>
      </Helmet>
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
        {displayedQuests.length > 0 ?
          <QuestCardsList quests={displayedQuests} /> :
          <QuestCardsEmptyList/>}
      </div>
    </main>
  );
}
export default MainPage;
