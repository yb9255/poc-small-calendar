import dayjs from "../../utils/dayjs";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { getMonthTable } from "../../utils/helpers";
import { Day } from "../Day";
import { HARDCODED_DAY_KO } from "../../constants";
import { ArrowLeft, ArrowRight } from "../../icons";
import { updateFirstDayOfCurMonth, updateSelectedDay } from "../../redux/date";
import { getFirstDayOfCurMonth } from "../../redux/selectors";

function Month() {
  const dispatch = useDispatch();
  const firstDayOfCurMonth = useSelector(getFirstDayOfCurMonth);
  const firstDayOfCurMonthDetail = dayjs(new Date(firstDayOfCurMonth));
  const firstDayOfCurMonthYear = firstDayOfCurMonthDetail.year();
  const firstDayOfCurMonthIndex = firstDayOfCurMonthDetail.month();
  const firstDayOfCurMonthHeading = firstDayOfCurMonthDetail
    .locale("ko")
    .format("YYYY년 MMMM");

  const monthTable =
    !Number.isNaN(firstDayOfCurMonthYear) &&
    !Number.isNaN(firstDayOfCurMonthIndex)
      ? getMonthTable(firstDayOfCurMonthYear, firstDayOfCurMonthIndex)
      : [];

  const handleMoveToPrevMonth = () => {
    dispatch(
      updateFirstDayOfCurMonth(
        dayjs(
          new Date(firstDayOfCurMonthYear, firstDayOfCurMonthIndex - 1, 1)
        ).format()
      )
    );

    dispatch(updateSelectedDay(null));
  };

  const handleMoveToNextMonth = () => {
    dispatch(
      updateFirstDayOfCurMonth(
        dayjs(
          new Date(firstDayOfCurMonthYear, firstDayOfCurMonthIndex + 1, 1)
        ).format()
      )
    );

    dispatch(updateSelectedDay(null));
  };

  return (
    <>
      <S_MonthHeader>
        <S_ArrowWrapper onClick={handleMoveToPrevMonth}>
          <ArrowLeft />
        </S_ArrowWrapper>
        <S_MonthHeading>{`${firstDayOfCurMonthHeading}`}</S_MonthHeading>
        <S_ArrowWrapper onClick={handleMoveToNextMonth}>
          <ArrowRight />
        </S_ArrowWrapper>
      </S_MonthHeader>
      <S_DayOfWeekContainer>
        {HARDCODED_DAY_KO.map((day) => {
          return (
            <S_DayOfWeek key={day}>
              <span>{day}</span>
            </S_DayOfWeek>
          );
        })}
      </S_DayOfWeekContainer>
      <S_MonthTableContainer>
        {monthTable.map((row, rowIndex) => {
          return (
            <Fragment key={rowIndex}>
              {row.map((dateInfo) => {
                return (
                  <Day key={dateInfo.details.unix()} dateInfo={dateInfo} />
                );
              })}
            </Fragment>
          );
        })}
      </S_MonthTableContainer>
    </>
  );
}

const S_MonthHeader = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;

const S_MonthHeading = styled.h4`
  margin: 0;
`;

const S_ArrowWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const S_DayOfWeekContainer = styled.div`
  display: grid;
  width: 77vw;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  margin-bottom: 15px;
`;

const S_DayOfWeek = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S_MonthTableContainer = styled.div`
  width: 77vw;
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 11vw));
  grid-template-rows: repeat(6, minmax(50px, 11vw));
  border-bottom: 1px solid black;
`;
export default Month;
