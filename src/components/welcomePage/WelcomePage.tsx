import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";
import "../../styles/fonts.css";
import darkCake from "../../assets/illustrations/darkCake.png";
import lightCake from "../../assets/illustrations/lightCake.png";

const WelcomePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${theme.mixin.forMinWidth650(`
        flex-direction: row;
        margin-right: 30px;
    `)}
`;

const CenterWrapper = styled.div`
  flex-direction: column;
`;

const Description = styled.h1`
  display: flex;
  text-align: center;
  font-size: ${theme.fontSize.welcomePage_description_mobile};
  font-family: "OggRoman";
  margin: 0;
  &::first-letter {
    text-transform: uppercase;
  }
  ${theme.mixin.forMinWidth950(`
      font-size: ${theme.fontSize.welcomePage_description_tablet};
      margin-right: 30px;
    `)}
  ${theme.mixin.forMinWidth650(`
      font-size: ${theme.fontSize.welcomePage_description_desktop};
      margin-right: 30px;
    `)}
`;

const DarkCakeIcon = styled.img`
  width: 200px;
  ${theme.mixin.forMinWidth650(`
      width: 300px;
    `)}
`;

const LightCakeIcon = styled.img`
  width: 240px;
  display: none;
  ${theme.mixin.forMinWidth950(`
      display: flex;
  `)}
`;

interface WelcomePageProps {
  onStartClick: (e: React.MouseEvent) => void;
}

const WelcomePage = ({ onStartClick }: WelcomePageProps) => {
  // Get the translation function 't' and the i18n instance from the useTranslation hook
  const { t } = useTranslation();

  return (
    <WelcomePageDiv data-testid="welcome-page-div">
      <DarkCakeIcon
        src={darkCake}
        alt="chocolate cake icon"
        aria-label="chocolate cake icon"
      />
      <CenterWrapper>
        <Description data-testit="description">
          {t("welcomePage.description")}
        </Description>
        <Button name="start" onClick={onStartClick} />
      </CenterWrapper>
      <LightCakeIcon
        src={lightCake}
        alt="cream cake icon"
        aria-label="cream cake icon"
      />
    </WelcomePageDiv>
  );
};

export default WelcomePage;
