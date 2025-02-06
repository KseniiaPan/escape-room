import QuestsThemeFilter from '../quests-theme-filter/quests-theme-filter';
import QuestsLevelFilter from '../quests-level-filter/quests-level-filter';

function QuestsFiltersContainer(): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <QuestsThemeFilter />
      <QuestsLevelFilter />
    </form>
  );
}
export default QuestsFiltersContainer;
