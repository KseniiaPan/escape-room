import {NameSpace} from '../../consts';
import {State} from '../../types/state-types';
import {QuestBookingInfo, QuestResevation} from '../../types/quests-types';

export const getBookingData = (state: State): QuestBookingInfo[] | null => state[NameSpace.Booking].bookingData;
export const getBookingDataLoadingStatus = (state: State): boolean => state[NameSpace.Booking].isBookingDataLoading;
export const getReservations = (state: State): QuestResevation[] | null => state[NameSpace.Booking].reservations;
export const getReservationsDataLoadingStatus = (state: State): boolean => state[NameSpace.Booking].isReservationsDataLoading;
