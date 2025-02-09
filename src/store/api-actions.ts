import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state-types';
import {UserData} from '../types/user-data-types';
import {AuthData} from '../types/auth-data-types';
import {APIRoute} from '../consts';
import {Quest, FullQuest, QuestBookingInfo} from '../types/quests-types';

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
  },
);

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Quest[]>(APIRoute.Quests);
    return data;
  },
);

export const fetchQuestDataAction = createAsyncThunk<FullQuest, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestData',
  async (id, {extra: api}) => {
    const {data} = await api.get<FullQuest>(`${APIRoute.Quests}/${id}`);
    return data;
  },
);

export const fetchBookingDataAction = createAsyncThunk<QuestBookingInfo[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBookingData',
  async (id, {extra: api}) => {
    const {data} = await api.get<QuestBookingInfo[]>(`${APIRoute.Quests}/${id}${APIRoute.Booking}`);
    return data;
  },
);
