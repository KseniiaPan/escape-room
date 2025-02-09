import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {FullQuestProcess} from '../../types/state-types';
import {fetchQuestDataAction} from '../api-actions';
import {toast} from 'react-toastify';

const initialState: FullQuestProcess = {
  fullQuestData: null,
  isFullQuestDataLoading: false,
};

export const fullQuestProcess = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestDataAction.pending, (state) => {
        state.isFullQuestDataLoading = true;
      })
      .addCase(fetchQuestDataAction.fulfilled, (state, action) => {
        state.fullQuestData = action.payload;
        state.isFullQuestDataLoading = false;
      })
      .addCase(fetchQuestDataAction.rejected, (state) => {
        state.isFullQuestDataLoading = false;
        toast.error('Произошла ошибка при загрузке данных о квесте, попробуйте езе раз');
      });
  }
});
