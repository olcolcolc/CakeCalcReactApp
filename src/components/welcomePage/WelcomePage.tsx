import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";
import "../../styles/fonts.css";
import { Icon } from "../icon/Icon";

const WelcomePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${theme.mixin.forMinWidth650(`
        flex-direction: row;
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
  ${theme.mixin.forMinWidth650(`
      font-size: ${theme.fontSize.welcomePage_description_desktop};
    `)}
`;

const DarkCakeIcon = styled.div`
  width: 40%;

  ${theme.mixin.forMinWidth650(`
    width: 373px;
    `)}
`;

const LightCakeIcon = styled.div`
  display: none;
  ${theme.mixin.forMinWidth950(`
      margin-left: 30px;
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
      <DarkCakeIcon>
        <Icon name="darkCake" aria-label="chocolate cake with candles" />
      </DarkCakeIcon>
      <CenterWrapper>
        <Description data-testit="description">
          {t("welcomePage.description")}
        </Description>
        <Button name="start" onClick={onStartClick} />
      </CenterWrapper>
      <LightCakeIcon>
        <Icon name="lightCake" aria-label="cream cake with candles" />
      </LightCakeIcon>
    </WelcomePageDiv>
  );
};

export default WelcomePage;
