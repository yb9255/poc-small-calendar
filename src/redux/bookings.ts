import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_BOOKING_DATA } from "../constants";

export interface BookingListItemType {
  time: string;
  title: string;
  booked: boolean;
  duration: number;
}

interface BookingType {
  date: string;
  bookingList: BookingListItemType[];
}

interface InitialStateType {
  dateList: BookingType[];
}

const initialState: InitialStateType = {
  dateList: DUMMY_BOOKING_DATA,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    book(state, action) {
      const targetDate = state.dateList.find(
        (date) => date === action.payload.date
      );
      const targetBooking = targetDate?.bookingList.find(
        (booking) => booking.time === action.payload.time
      );

      if (targetBooking) {
        targetBooking.booked = true;
      }
    },
  },
});

export const { book } = bookingSlice.actions;
export default bookingSlice.reducer;
