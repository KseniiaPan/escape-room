import {store} from '../store/index';
import {UserData} from '../types/user-data-types';
import {Quest, FullQuest, QuestBookingInfo} from './quests-types';
import {AuthorizationStatus} from '../consts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppProcess = {
  currentQuestTheme: string;
  currentQuestLevel: string;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type QuestsProcess ={
  quests: Quest[];
  isQuestsDataLoading: boolean;
}
export type FullQuestProcess ={
  fullQuestData: FullQuest | null;
  isFullQuestDataLoading: boolean;
}

export type BookingProcess = {
  bookingData: QuestBookingInfo[] | null;
  isBookingDataLoading: boolean;
};

