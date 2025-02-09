import {NameSpace} from '../../consts';
import {State} from '../../types/state-types';
import {FullQuest} from '../../types/quests-types';

export const getFullQuestData = (state: State): FullQuest | null => state[NameSpace.Quest].fullQuestData;
export const getFullQuestLoadingStatus = (state: State): boolean => state[NameSpace.Quest].isFullQuestDataLoading;
