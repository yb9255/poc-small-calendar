import { useEffect, useContext } from "react";
import styled from "styled-components/macro";
import dayjs from "./utils/dayjs";
import Month from "./components/Month/Month";
import DateContext from "./store";

function App() {
  const { setFirstDayOfCurMonth, setToday } = useContext(DateContext);

  useEffect(() => {
    const date = new Date();

    setFirstDayOfCurMonth(
      dayjs(new Date(date.getFullYear(), date.getMonth(), 1, 0, 0)).format()
    );

    setToday(dayjs(date.setHours(0, 0, 0, 0)).format());
  }, []);

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
