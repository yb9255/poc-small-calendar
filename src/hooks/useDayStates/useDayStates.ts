import { useSelector } from "react-redux";
import dayjs from "../../utils/dayjs";
import { DateInfoTypes, dateState, DUMMY_BOOKING_DATA } from "../../constants";
import { getSelectedDay, getToday } from "../../redux/selectors";

function useDayStates(dateInfo: DateInfoTypes) {
  const selectedDay = useSelector(getSelectedDay);
  const selectedDayDetail = selectedDay ? dayjs(new Date(selectedDay)) : null;
  const today = useSelector(getToday);
  const todayDetail = dayjs(new Date(today));

  const { state: curDateState, details: curDateDetails } = dateInfo;

  const isSelectedDay =
    !!selectedDayDetail &&
    selectedDayDetail.format("YY-MM-DD") === curDateDetails.format("YY-MM-DD");

  const isToday =
    todayDetail.format("YY-MM-DD") === curDateDetails.format("YY-MM-DD") &&
    curDateState === dateState.thisMonthDate;

  const isOutOfThisMonthWeek =
    curDateState === dateState.nextMonthDateOutOfThisMonthWeek;

  const isDisabledDay =
    curDateState !== dateState.thisMonthDate ||
    curDateDetails.unix() < todayDetail.unix();

  const hasBooking = DUMMY_BOOKING_DATA.some((booking) => {
    return booking.date === curDateDetails.format();
  });

  return {
    isSelectedDay,
    isToday,
    isOutOfThisMonthWeek,
    isDisabledDay,
    hasBooking,
  };
}

export default useDayStates;
