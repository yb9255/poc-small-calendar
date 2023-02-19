import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
  firstDayOfCurMonth: string;
  today: string;
  selectedDay: string | null;
}

const initialState: InitialStateTypes = {
  firstDayOfCurMonth: "",
  today: "",
  selectedDay: null,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    updateFirstDayOfCurMonth(state, action) {
      state.firstDayOfCurMonth = action.payload;
    },
    updateToday(state, action) {
      state.today = action.payload;
    },
    updateSelectedDay(state, action) {
      state.selectedDay = action.payload;
    },
  },
});

export const { updateFirstDayOfCurMonth, updateToday, updateSelectedDay } =
  dateSlice.actions;
export default dateSlice.reducer;
