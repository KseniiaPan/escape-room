import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {BookingProcess} from '../../types/state-types';
import {fetchBookingDataAction, fetchReservationsAction} from '../api-actions';
import {toast} from 'react-toastify';

const initialState: BookingProcess = {
  bookingData: null,
  reservations: null,
  isReservationsDataLoading: false,
  isBookingDataLoading: false,
};

export const bookingProcess = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingDataAction.pending, (state) => {
        state.isBookingDataLoading = true;
      })
      .addCase(fetchBookingDataAction.fulfilled, (state, action) => {
        state.bookingData = action.payload;
        state.isBookingDataLoading = false;
      })
      .addCase(fetchBookingDataAction.rejected, (state) => {
        state.isBookingDataLoading = false;
        toast.error('Произошла ошибка при загрузке данных, попробуйте еще раз');
      })
      .addCase(fetchReservationsAction.pending, (state) => {
        state.isReservationsDataLoading = true;
      })
      .addCase(fetchReservationsAction.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.isReservationsDataLoading = false;
      })
      .addCase(fetchReservationsAction.rejected, (state) => {
        state.isReservationsDataLoading = false;
        toast.error('Произошла ошибка при загрузке данных, попробуйте еще раз');
      });
  }
});
