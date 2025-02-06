import {questLevels} from '../consts';
import {QuestFilter} from '../types/quests-types';

const getQuestLevelRuName = (level: string) => {
  const currentQuestLevel = questLevels.find((questLevel) => questLevel.name === level);
  return currentQuestLevel && currentQuestLevel.ruName;
};

const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1);

const isDefaultCheked = (defaultValue: QuestFilter, currentValue: QuestFilter) => currentValue.name === defaultValue.name;

export {getQuestLevelRuName, capitalize, isDefaultCheked};
