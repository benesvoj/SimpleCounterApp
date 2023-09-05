import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { site } from './url';

export const App = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <Div_Container>
      <Box>
        <DivCounter>
          <H1_Heading
            $countColor={count}
            onClick={() => setCount(initialCount)}
          >
            {count}
          </H1_Heading>
          <PCounter>Reset can be done by clicking on counter</PCounter>
        </DivCounter>
        <Div_ButtonGroup>
          <div>
            <Button_Styled
              type="button"
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              <FaPlus />
            </Button_Styled>
          </div>
          <div>
            <Button_Styled
              type="button"
              onClick={() => setCount((prevCount) => prevCount - 1)}
            >
              <FaMinus />
            </Button_Styled>
          </div>
        </Div_ButtonGroup>
      </Box>
      <DivFloatingContainer>
        <Link href={site.homeUrl}>
          <DivFloatingButton>
            <FaHome />
          </DivFloatingButton>
        </Link>
      </DivFloatingContainer>
    </Div_Container>
  );
};

const float = keyframes`
  0% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0 rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
}
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.black};
`;

const DivFloatingContainer = styled.div`
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 30px;
  right: 30px;
  z-index: 50;
`;

const DivFloatingButton = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.grey};
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transform: translatey(0px);
  animation: ${float} 6s ease-in-out infinite;

  &:hover {
    background: ${(p) => p.theme.colors.pink};
    color: ${(p) => p.theme.colors.white};
  }
`;

const DivCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const PCounter = styled.p`
  font-size: 12px;
`;

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
const Box = styled.div`
  display: flex;
  background: ${(p) => p.theme.colors.grey};
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 20px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const H1_Heading = styled.h1<{ $countColor: number }>`
  font-size: 64px;
  margin-bottom: 2px;
  cursor: pointer;
  color: ${(p) =>
    p.$countColor > 0
      ? p.theme.colors.green
      : p.$countColor < 0
      ? p.theme.colors.red
      : p.theme.colors.black};

  &:hover {
    color: ${(p) => p.theme.colors.pink};
  }
`;

const Button_Styled = styled.button`
  height: 100px;
  width: 100px;
  font-size: 32px;
  font-weight: 100;
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.colors.pink};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background: ${(p) => p.theme.colors.pink};
    color: ${(p) => p.theme.colors.white};
    border: 1px solid transparent;
  }
`;
