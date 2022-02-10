import styled from 'styled-components';
import Calculator from './view/Calculator';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const RecordBoard = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <FlexDiv>
      <RecordBoard />
      <Calculator />
    </FlexDiv>
  );
};

export default App;
