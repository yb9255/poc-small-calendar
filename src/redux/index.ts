import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./date";
import bookingsReducer from "./bookings";

const store = configureStore({
  reducer: {
    date: dateReducer,
    bookings: bookingsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
