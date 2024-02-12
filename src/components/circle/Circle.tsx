import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { theme } from "../../styles/theme";

// Styled component for stepper's circles
const CircleDiv = styled.div`
  display: flex;
  z-index: 1;
  background-color: ${theme.colors.white};
  border: 4px solid ${theme.colors.yellow};
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.stepper};
  border-radius: 50%;
  height: 72px;
  width: 72px;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;

  &.active {
    background-color: ${theme.colors.pink};
    border: 3px solid ${theme.colors.pink};
  }
`;

// Interface for Circle props
interface CircleProps {
  children: ReactNode;
  classname: string;
}

const Circle: React.FC<CircleProps> = ({ children, classname }) => {
  return (
    <CircleDiv className={classname}>
      {(Number(children) + 1).toString()}
    </CircleDiv>
  );
};

export default Circle;
