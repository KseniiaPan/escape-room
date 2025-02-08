import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, questLevels, questThemes} from '../../consts';
import {AppProcess} from '../../types/state-types';

const initialState: AppProcess = {
  currentQuestTheme: questThemes[0].name,
  currentQuestLevel: questLevels[0].name,
};
export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeQuestTheme: (state, action: PayloadAction<string>) => {
      state.currentQuestTheme = action.payload;
    },
    changeQuestLevel: (state, action: PayloadAction<string>) => {
      state.currentQuestLevel = action.payload;
    }
  },
});

export const {changeQuestTheme, changeQuestLevel} = appProcess.actions;
