import styled from "styled-components/macro";
import Month from "./components/Month/Month";

function App() {
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
