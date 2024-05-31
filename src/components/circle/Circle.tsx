import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { theme } from "../../styles/theme";

// Interface for Circle props
interface CircleProps {
  isActive: boolean;
  children: ReactNode;
}

// Styled component for stepper's circles
const CircleDiv = styled.div<{ isActive: boolean }>`
  display: flex;
  z-index: 1;
  background-color: ${(props) =>
    props.isActive ? theme.colors.pink : theme.colors.white};
  border: 4px solid
    ${(props) => (props.isActive ? theme.colors.pink : theme.colors.yellow)};
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.base};
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;
  font-family: "Medium_BasisGrotesqueArabicPro";
`;

const Circle: React.FC<CircleProps> = ({ children, isActive }) => {
  const circleNumber = (Number(children) + 1).toString();

  return (
    <CircleDiv isActive={isActive} data-testid={`circle-${children}`}>
      {circleNumber}
    </CircleDiv>
  );
};

export default Circle;
