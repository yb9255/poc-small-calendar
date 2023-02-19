import { useSelector } from "react-redux";
import { getSelectedDay, getBookingDateList } from "../../redux/selectors";
import { BookingListItemType } from "../../redux/bookings";
import styled from "styled-components/macro";
import BookingListItem from "./BookingListItem";

function BookingList() {
  const selectedDay = useSelector(getSelectedDay);
  const bookingDateList = useSelector(getBookingDateList);

  if (!selectedDay) return <></>;

  const targetBookingList = bookingDateList.find(
    (dateList) => dateList.date === selectedDay
  );

  let bookingList: BookingListItemType[] = [];

  if (targetBookingList) {
    bookingList = targetBookingList.bookingList;
  }

  return (
    <S_BookingListWrapper>
      {bookingList.length === 0 && <S_NoBooking>no booking</S_NoBooking>}
      {bookingList.length > 0 &&
        bookingList.map((booking) => {
          const { time, title, booked, duration } = booking;

          return (
            <BookingListItem
              key={time}
              time={time}
              title={title}
              booked={booked}
              duration={duration}
            />
          );
        })}
    </S_BookingListWrapper>
  );
}

const S_BookingListWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 300px;
  height: 250px;
  overflow: auto;
`;

const S_NoBooking = styled.span`
  text-align: center;
`;

export default BookingList;
