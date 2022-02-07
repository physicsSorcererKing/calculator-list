import Monitor from './view/Monitor';
import CalButtons from './view/CalButtons';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const RecordBoard = styled.div`
  flex: 1;
`;

const Calculator = styled.div`
  max-width: 600px;
  padding-bottom: 16px;
  border: 0 solid var(--bs-dark);
  border-top-width: 1px;
  border-left-width: 1px;
  border-radius: 4px 0 0 0;
  background-color: var(--bs-light);
  align-self: flex-end;
`;

const App = () => {
  return (
    <FlexDiv>
      <RecordBoard />
      <Calculator>
        <Container fluid>
          <Row>
            <Col>
              <Monitor />
            </Col>
          </Row>
          <Row>
            <CalButtons value={'AC'} />
            <CalButtons value={'-/+'} />
            <CalButtons value={'%'} />
            <CalButtons value={'÷'} />
            <CalButtons value={7} />
            <CalButtons value={8} />
            <CalButtons value={9} />
            <CalButtons value={'×'} />
            <CalButtons value={4} />
            <CalButtons value={5} />
            <CalButtons value={6} />
            <CalButtons value={'-'} />
            <CalButtons value={1} />
            <CalButtons value={2} />
            <CalButtons value={3} />
            <CalButtons value={'+'} />
            <CalButtons value={0} extend />
            <CalButtons value={'.'} />
            <CalButtons value={'='} />
          </Row>
        </Container>
      </Calculator>
    </FlexDiv>
  );
};

export default App;
