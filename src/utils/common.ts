import {questLevels, questThemes} from '../consts';
import {QuestFilter} from '../types/quests-types';

const getQuestLevelRuName = (level: string) => {
  const currentQuestLevel = questLevels.find((questLevel) => questLevel.name === level);
  return currentQuestLevel && currentQuestLevel.ruName;
};

const getQuestThemeRuName = (theme: string) => {
  const currentQuestTheme = questThemes.find((questTheme) => questTheme.name === theme);
  return currentQuestTheme && currentQuestTheme.ruName;
};

const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1);

const isDefaultCheked = (defaultValue: QuestFilter, currentValue: QuestFilter) => currentValue.name === defaultValue.name;

export {getQuestLevelRuName, getQuestThemeRuName, capitalize, isDefaultCheked};
