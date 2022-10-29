import { useContext } from "react";
import dayjs from "../../utils/dayjs";
import { DateInfoTypes, dateState } from "../../constants";
import DateContext from "../../store";

function useDayStates(dateInfo: DateInfoTypes) {
  const { selectedDay, today } = useContext(DateContext);

  const selectedDayDetail = selectedDay ? dayjs(new Date(selectedDay)) : null;
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
