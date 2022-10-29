import { RootState } from "../../redux/index";
import { useSelector } from "react-redux";
import dayjs from "../../utils/dayjs";
import { DateInfoTypes, dateState } from "../../constants";

function useDayStates(dateInfo: DateInfoTypes) {
  const selectedDay = useSelector((state: RootState) => state.date.selectedDay);
  const selectedDayDetail = selectedDay ? dayjs(new Date(selectedDay)) : null;
  const today = useSelector((state: RootState) => state.date.today);
  const todayDetail = dayjs(new Date(today));

  const { state: curDateState, details: curDateDetails } = dateInfo;

  const isSelectedDay =
    !!selectedDayDetail &&
    selectedDayDetail.format("YY-MM-DD") === curDateDetails.format("YY-MM-DD");

  const isToday =
    todayDetail.format("YY-MM-DD") === curDateDetails.format("YY-MM-DD");

  const isOutOfThisMonthWeek =
    curDateState === dateState.nextMonthDateOutOfThisMonthWeek;

  const isDisabledDay =
    curDateState !== dateState.thisMonthDate ||
    curDateDetails.unix() < todayDetail.unix();

  return {
    isSelectedDay,
    isToday,
    isOutOfThisMonthWeek,
    isDisabledDay,
  };
}

export default useDayStates;
