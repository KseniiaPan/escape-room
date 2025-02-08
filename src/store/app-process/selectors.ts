import {NameSpace} from '../../consts';
import { State } from '../../types/state-types';

export const getCurrentQuestTheme = (state: State): string => state[NameSpace.App].currentQuestTheme;
export const getCurrentQuestLevel = (state: State): string => state[NameSpace.App].currentQuestLevel;
