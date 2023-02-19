import { RootState } from ".";

export const getFirstDayOfCurMonth = (state: RootState) =>
  state.date.firstDayOfCurMonth;
export const getSelectedDay = (state: RootState) => state.date.selectedDay;
export const getToday = (state: RootState) => state.date.today;
export const getBookingDateList = (state: RootState) => state.bookings.dateList;
