import { BookingListItemType } from "../../redux/bookings";
import styled, { css } from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "../../utils/dayjs";
import { book } from "../../redux/bookings";
import { getSelectedDay } from "../../redux/selectors";

function BookingListItem({
  title,
  time,
  booked,
  duration,
}: BookingListItemType) {
  const dispatch = useDispatch();
  const selectedDay = useSelector(getSelectedDay);

  const startTimeData = dayjs(time);
  const startTime = dayjs(startTimeData).format("HH:mm");
  const endTime = dayjs(
    new Date(
      startTimeData.year(),
      startTimeData.month(),
      startTimeData.date(),
      startTimeData.hour(),
      startTimeData.minute() + duration
    )
  ).format("HH:mm");

  const canBook = !booked && startTimeData.unix() >= dayjs().unix();

  const handleBook = () => {
    dispatch(book({ time, date: selectedDay }));
  };

  return (
    <S_BookingListWrapper>
      <S_HeadingBox>
        <S_Dot canBook={canBook} />
        <S_Heading>
          <S_Time>{`${startTime} ~ ${endTime} (${duration}분)`}</S_Time>
          <S_Title>{title}</S_Title>
        </S_Heading>
      </S_HeadingBox>
      <S_Button disabled={!canBook} onClick={handleBook} canBook={canBook}>{`${
        canBook ? "예약하기" : "예약불가"
      }`}</S_Button>
    </S_BookingListWrapper>
  );
}

interface bookedProps {
  canBook: boolean;
}

const S_BookingListWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const S_Dot = styled.div<bookedProps>`
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background-color: ${({ canBook }) =>
    canBook ? `rgba(0, 0, 255, 0.7)` : `#aaa`};
  margin-right: 5px;
`;

const S_HeadingBox = styled.div`
  display: flex;
`;

const S_Heading = styled.div``;

const S_Time = styled.span`
  display: block;
  font-size: 14px;
`;

const S_Title = styled.span`
  display: block;
  font-size: 18px;
`;

const enableButtonStyle = css`
  background-color: rgba(0, 0, 255, 0.7);

  &:active {
    background-color: blue;
  }
`;

const S_Button = styled.button<bookedProps>`
  background-color: #aaa;
  border: none;
  font-weight: bold;
  color: #fff;
  width: 70px;
  height: 26px;
  border-radius: 5px;

  ${({ canBook }) => canBook && enableButtonStyle}
`;

export default BookingListItem;
