import {NameSpace} from '../../consts';
import {State} from '../../types/state-types';
import {Quest} from '../../types/quests-types';

export const getQuestsData = (state: State): Quest[] => state[NameSpace.Quests].quests;
export const getQuestsLoadingStatus = (state: State): boolean => state[NameSpace.Quests].isQuestsDataLoading;
