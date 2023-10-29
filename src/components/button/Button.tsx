import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Button = styled.button`
  ${theme.mixin.defaultButton};
  margin: 0 auto;
  text-align: center;
  font-size: ${theme.fontSize.button};
  font-family: ${theme.fontFamily.nunito};
`;

const StartButton = styled(Button)`
  background: ${theme.colors.startButton};
  color: ${theme.colors.white};

  :hover {
    background-color: ${theme.colors.startButtonHover};
    transform: scale(0.90);
    transition: transform 0.2s ease;
  }

  :active{
    transform: scale(1.2);
  }

  ${theme.mixin.forDesktop(`
    font-size: 60px;
    padding: 10px 70px;
  `)}
`;

const NextButton = styled(Button)`
  background-color: ${theme.colors.nextButton};
  color: ${theme.colors.white};
  font-size: 26px;

  :hover {
    background-color: ${theme.colors.nextButtonHover};
    transform: scale(0.90);
    transition: transform 0.2s ease;
  }

  :active{
    transform: scale(0.98);
  }
  
  :focus{
    outline: none;
  }

  :disabled{
    background-color: ${theme.colors.disabledButton};
    pointer-events: none;
  }
`;


const AgainButton = styled(Button)`
  background: ${theme.colors.againButton};
  color: ${theme.colors.white};

  :hover {
    background-color: ${theme.colors.againButtonHover};
  }
`;

interface IconProps {
  name: "start" | "next" | "previous" | "again";
  onClick?: React.MouseEventHandler; 
  disabled?: boolean;
}

const ButtonComponent: React.FC<IconProps> = ({ name, onClick, disabled }) => {
  let button;

  switch (name) {
    case "start":
      button = <StartButton onClick={onClick}>start</StartButton>; 
      break;
    case "next":
      button = <NextButton onClick={onClick} disabled={disabled}>dalej</NextButton>;
      break;
    case "previous":
      button = <NextButton onClick={onClick} disabled={disabled}>wróć</NextButton>;
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
