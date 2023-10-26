import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Button = styled.button`
  ${theme.mixin.defaultButton}; 
`;

const StartButton = styled(Button)`
  background: ${theme.colors.startButton};
  color: ${theme.colors.white};
  
  &:hover {
    background-color: ${theme.colors.startButtonHover};
  }
`;

const NextButton = styled(Button)`
  background: ${theme.colors.nextButton};
  color: ${theme.colors.white}; 

  &:hover {
    background-color: ${theme.colors.nextButtonHover};
  }
  `;

const PreviousButton = styled(Button)`
  background: ${theme.colors.nextButton};
  color: ${theme.colors.white}; 
  
  &:hover {
    background-color: ${theme.colors.nextButtonHover};
  }
  `;

const AgainButton = styled(Button)`
  background: ${theme.colors.againButton};
  color: ${theme.colors.white}; 

  &:hover {
    background-color: ${theme.colors.againButtonHover};
  }
  `;

interface IconProps {
  name: "start" | "next" | "previous" | "again";
}

const ButtonComponent: React.FC<IconProps> = ({ name }) => {
  let button;

  switch (name) {
    case "start":
      button = <StartButton>start</StartButton>;
      break;
    case "next":
      button = <NextButton>dalej</NextButton>;
      break;
    case "previous":
      button = <PreviousButton>wróć</PreviousButton>;
      break;
    case "again":
      button = <AgainButton>jeszcze raz</AgainButton>;
      break;
    default:
      button = null; 
  }

  return button;
};

export default ButtonComponent;
