import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { useTranslation } from "react-i18next";

// Styled components for different button types
const Button = styled.button`
  ${theme.mixin.defaultButton};
  text-align: center;
  font-family: "Medium_BasisGrotesqueArabicPro";
  border-radius: 3rem;
  padding: 0.75rem 2.5rem;
  font-size: ${theme.fontSize.base};
  height: 2rem;
  width: 5rem;
  :hover {
    transform: scale(0.9);
    transition: transform 0.2s ease;
  }
  :active {
    transform: scale(0.98);
  }
`;

const StartButton = styled(Button)`
  background: ${theme.colors.pink};
  color: ${theme.colors.black};
  margin-top: 1.4rem;

  :hover {
    background: ${theme.colors.lightPink};
  }

  :active,
  :focus {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  }

  ${theme.mixin.forMinWidth650(`
    margin-top: 2rem;
  `)};
`;

const NextButton = styled(Button)`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  :hover {
    background: ${theme.colors.lightPink};
    color: ${theme.colors.black};
  }

  :active {
    background-color: ${theme.colors.pink};
    color: ${theme.colors.black};
  }

  :focus {
    box-shadow: 0 0 0.6rem 0.2rem ${theme.colors.black};
  }

  :focus:active {
    box-shadow: 0 0 0.6rem 0.2rem ${theme.colors.pink};
  }

  :focus:hover {
    box-shadow: 0 0 0.6rem 0.2rem ${theme.colors.lightPink};
  }

  :disabled {
    background-color: ${theme.colors.disabledButton};
    color: ${theme.colors.white};
    cursor: not-allowed;
    transform: none;
  }
`;

const PreviousButton = styled.button`
  ${theme.mixin.defaultButton}
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.base};
  font-family: "Medium_BasisGrotesqueArabicPro";
  border-radius: 0px;
  cursor: pointer;
  padding: 0px 0.5rem;
  height: 2.2rem;
  border-bottom: 0.1rem solid transparent;
  :hover,
  :active,
  :focus {
    border-bottom: 0.1rem solid ${theme.colors.black};
    transform: none;
  }
  :disabled {
    border-bottom: 0.1rem solid transparent;
    cursor: not-allowed;
  }
`;

const PreviousButtonWrapper = styled.div`
  margin: 0 auto;
  padding: 0.6rem 1.9rem;
`;

// Interface for button props
interface ButtonProps {
  type: "start" | "next" | "previous";
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
}

// Button component with different variations based on the type prop
const ButtonComponent: React.FC<ButtonProps> = ({
  type,
  onClick,
  disabled,
}) => {
  // Get the translation function 't' and the i18n instance from the useTranslation hook
  const { t } = useTranslation();

  // Switch case to render different buttons based on the type prop
  const buttonTypes = {
    start: <StartButton onClick={onClick}>start</StartButton>,
    next: (
      <NextButton
        data-testid="next-button"
        onClick={onClick}
        disabled={disabled}
      >
        {t("button.next")}
      </NextButton>
    ),
    previous: (
      <PreviousButtonWrapper>
        <PreviousButton
          data-testid="previous-button"
          onClick={onClick}
          disabled={disabled}
        >
          {t("button.return")}
        </PreviousButton>
      </PreviousButtonWrapper>
    ),
  };

  return buttonTypes[type] || null;
};

export default ButtonComponent;
