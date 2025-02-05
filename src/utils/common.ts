import {QuestLevel} from '../consts';

const getQuestLevelRuName = (level: string) => {
  let questLevel;
  switch (level) {
    case QuestLevel.Easy.enName:
      questLevel = QuestLevel.Easy.ruName;
      break;
    case QuestLevel.Medium.enName:
      questLevel = QuestLevel.Medium.ruName;
      break;

    case QuestLevel.Hard.enName:
      questLevel = QuestLevel.Hard.ruName;
      break;
  }
  return questLevel;
};

export {getQuestLevelRuName};
