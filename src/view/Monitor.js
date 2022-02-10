import styled from 'styled-components';
import { forwardRef, useState } from 'react';

const Input = styled.input`
  position: relative;
  width: 100%;
  border: 1px solid black;
  height: 4rem;
  border-radius: 4px;
  cursor: text;
  font-size: 1.5rem;
  padding: 0.75rem 2.75rem 0 0.75rem;
`;

const Monitor = forwardRef((props, ref) => {
  return (
    <div className={'py-2'}>
      <Input ref={ref} />
    </div>
  );
});

Monitor.displayName = 'Monitor';
export default Monitor;
