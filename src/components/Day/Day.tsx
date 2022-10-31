import { useDispatch } from "react-redux";
import { DateInfoTypes } from "../../constants";
import styled, { css } from "styled-components/macro";
import { updateSelectedDay } from "../../redux/date";
import { useDayStates } from "../../hooks";

interface DayProps {
  dateInfo: DateInfoTypes;
}

function Day({ dateInfo }: DayProps) {
  const dispatch = useDispatch();
  const { isDisabledDay, isOutOfThisMonthWeek, isSelectedDay, isToday } =
    useDayStates(dateInfo);

  const handleSelectDay = () => {
    if (isOutOfThisMonthWeek) return;
    dispatch(updateSelectedDay(dateInfo.details.format()));
  };

  return (
    <S_DayWrapper
      isSelectedDay={isSelectedDay}
      isDisabledDay={isDisabledDay}
      isToday={isToday}
      onClick={handleSelectDay}
    >
      {!isOutOfThisMonthWeek && dateInfo.details.date()}
    </S_DayWrapper>
  );
}

const selectedDay = css`
  background-color: rgba(0, 0, 255, 0.7);
  color: #fff;
`;

const disabledDay = css`
  color: #aaa;
`;

interface DayWrapperProps {
  isSelectedDay: boolean;
  isDisabledDay: boolean;
  isToday: boolean;
}

const S_DayWrapper = styled.div<DayWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ${({ isSelectedDay }) => isSelectedDay && selectedDay};
  ${({ isDisabledDay, isSelectedDay }) =>
    isDisabledDay && !isSelectedDay && disabledDay}
  font-weight: ${({ isToday }) => (isToday ? "bold" : "normal")};
`;

export default Day;
