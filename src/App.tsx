import React, { useState } from 'react';
import styled from 'styled-components';

export const App = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <Div_Container>
      <Div_Content>
        <div>
          <H1_Heading onClick={() => setCount(initialCount)}>
            {count}
          </H1_Heading>
        </div>
        <Div_ButtonGroup>
          <div>
            <Button_Styled
              type="button"
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              +
            </Button_Styled>
          </div>
          <div>
            <Button_Styled
              type="button"
              onClick={() => setCount((prevCount) => prevCount - 1)}
            >
              -
            </Button_Styled>
          </div>
        </Div_ButtonGroup>
      </Div_Content>
    </Div_Container>
  );
};

const Div_Container = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Div_ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 20px;
  gap: 20px;
`;
const Div_Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 20px;
`;

const H1_Heading = styled.h1`
  font-size: 64px;

  :hover {
    color: ${(p) => p.theme.colors.pink};
    cursor: pointer;
  }
`;

const Button_Styled = styled.button`
  height: 100px;
  width: 100px;
  font-size: 64px;
  font-weight: 100;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.pink};

  :hover {
    background-color: ${(p) => p.theme.colors.pink};
    border: 1px solid transparent;
  }
`;
