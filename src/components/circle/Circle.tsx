import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { theme } from "../../styles/theme";

// Styled component for stepper's circles
const CircleDiv = styled.div<{ isActive: boolean }>`
  display: flex;
  z-index: 1;
  background-color: ${(props) =>
    props.isActive ? theme.colors.pink : theme.colors.white};
  border: 4px solid
    ${(props) => (props.isActive ? theme.colors.pink : theme.colors.yellow)};
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.stepper};
  border-radius: 50%;
  height: 62px;
  width: 62px;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;
  font-family: "Medium_BasisGrotesqueArabicPro";
`;

// Interface for Circle props
interface CircleProps {
  isActive: boolean;
  children: ReactNode;
}

const Circle: React.FC<CircleProps> = ({ children, isActive }) => {
  return (
    <CircleDiv isActive={isActive}>
      {(Number(children) + 1).toString()}
    </CircleDiv>
  );
};

export default Circle;
