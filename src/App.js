import Monitor from './view/Monitor';
import CalButtons from './view/CalButtons';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
  padding-bottom: 16px;
  border: 1px solid black;
`;

const App = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default App;
