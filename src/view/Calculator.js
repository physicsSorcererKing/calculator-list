import { Col, Container, Row } from 'reactstrap';
import Monitor from './Monitor';
import CalButtons from './CalButtons';
import styled from 'styled-components';
import { useCallback, useRef } from 'react';

const CalculatorWrapper = styled.div`
  max-width: 600px;
  padding-bottom: 16px;
  border: 0 solid var(--bs-dark);
  border-top-width: 1px;
  border-left-width: 1px;
  border-radius: 4px 0 0 0;
  background-color: var(--bs-light);
  align-self: flex-end;
`;

const Calculator = () => {
  const inputRef = useRef();

  const clearInput = useCallback(() => {
    console.log('clear input');
    inputRef.current.value = '';
  }, []);

  return (
    <CalculatorWrapper>
      <Container fluid>
        <Row>
          <Col>
            <Monitor ref={inputRef} />
          </Col>
        </Row>
        <Row>
          <CalButtons value={'AC'} onClick={clearInput} />
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
    </CalculatorWrapper>
  );
};

export default Calculator;
