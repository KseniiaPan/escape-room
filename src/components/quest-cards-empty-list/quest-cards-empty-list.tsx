
import styles from './quest-cards-empty-list.module.css';

function QuestCardsEmptyList(): JSX.Element {
  return (
    <div className={styles.container}>
      К сожалению, не удалось найти подходящий квест <br/>
      попробуйте изменить параметры поиска
    </div>
  );
}

export default QuestCardsEmptyList;
