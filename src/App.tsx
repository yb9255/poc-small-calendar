import { useEffect } from "react";
import styled from "styled-components/macro";
import dayjs from "./utils/dayjs";
import { useDispatch } from "react-redux";
import { updateFirstDayOfCurMonth, updateToday } from "./redux/date";
import Month from "./components/Month/Month";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const date = new Date();

    dispatch(
      updateFirstDayOfCurMonth(
        dayjs(new Date(date.getFullYear(), date.getMonth(), 1, 0, 0)).format()
      )
    );

    dispatch(updateToday(dayjs(date.setHours(0, 0, 0, 0)).format()));
  }, [dispatch]);

  return (
    <S_Layout>
      <Month />
    </S_Layout>
  );
}

const S_Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
