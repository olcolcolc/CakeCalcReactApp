import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { theme } from "../../styles/theme";

// Styled component for stepper's circles
const CircleDiv = styled.div`
  display: flex;
  z-index: 1;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  border: 3px solid #e0e0e0;
  transition: 0.4s ease;

  &.active {
    border-color: ${theme.colors.stepper};
  }
`;

// Interface for Circle props
interface CircleProps {
  children: ReactNode;
}

const Circle: React.FC<CircleProps> = ({ children }) => {
  return <CircleDiv>{(Number(children) + 1).toString()}</CircleDiv>;
};

export default Circle;
