import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {QuestsProcess} from '../../types/state-types';
import {fetchQuestsAction} from '../api-actions';
import {toast} from 'react-toastify';

const initialState: QuestsProcess = {
  quests: [],
  isQuestsDataLoading: false,
};

export const questsProcess = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isQuestsDataLoading = false;
        toast.error('Ошибка при загрузке информации. Попробуйте еще раз.');
      });
  }
});
