import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {appProcess} from './app-process/app-process';
import {userProcess} from './user-process/user-process';
import {questsProcess} from './quests-process/quests-process';
import {fullQuestProcess} from './full-quest-process/full-quest-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Quests]: questsProcess.reducer,
  [NameSpace.Quest]: fullQuestProcess.reducer,
});
