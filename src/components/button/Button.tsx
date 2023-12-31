import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { useTranslation } from "react-i18next";

// Styled components for different button types
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
    transform: scale(0.9);
    transition: transform 0.2s ease;
  }

  :active {
    transform: scale(1.2);
  }

  :focus {
    box-shadow: 0 0 5px 3px ${theme.colors.startButtonFocus};
  }

  ${theme.mixin.forDesktop(`
    font-size: 60px;
    padding: 10px 70px;
  `)};
`;

const NextButton = styled(Button)`
  background-color: ${theme.colors.nextButton};
  color: ${theme.colors.white};
  font-size: 26px;
  :focus {
    box-shadow: 0 0 5px 3px ${theme.colors.nextButtonFocus};
  }

  :hover {
    transform: scale(0.9);
    transition: transform 0.2s ease;
  }

  :active {
    transform: scale(0.98);
  }

  :disabled {
    background-color: ${theme.colors.disabledButton};
    pointer-events: none;
  }
`;

// Interface for button props
interface IconProps {
  name: "start" | "next" | "previous";
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
}

// Button component with different variations based on the name prop
const ButtonComponent: React.FC<IconProps> = ({ name, onClick, disabled }) => {
  // Get the translation function 't' and the i18n instance from the useTranslation hook
  const { t } = useTranslation();

  let button;

  // Switch case to render different buttons based on the name prop
  switch (name) {
    case "start":
      button = <StartButton onClick={onClick}>start</StartButton>;
      break;
    case "next":
      button = (
        <NextButton
          data-testid="next-button"
          onClick={onClick}
          disabled={disabled}
        >
          {t("button.next")}
        </NextButton>
      );
      break;
    case "previous":
      button = (
        <NextButton
          data-testid="previous-button"
          onClick={onClick}
          disabled={disabled}
        >
          {t("button.return")}
        </NextButton>
      );
      break;
    default:
      button = null;
  }

  return button;
};

export default ButtonComponent;
