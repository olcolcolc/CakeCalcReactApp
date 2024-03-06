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
  padding: 0 20px;
  ${theme.mixin.forMinWidth650(`
        flex-direction: row;
        margin: 0 20px;
    `)}
`;

const CenterWrapper = styled.div`
  flex-direction: column;
  ${theme.mixin.forMinWidth650(`
      margin: 0 10px;
    `)}
`;

const Description = styled.p`
  display: flex;
  margin: 0 15px;
  line-height: 60px;
  font-size: ${theme.fontSize.welcomePage_description_mobile};
  font-family: "OggRoman";
  ${theme.mixin.forMinWidth650(`
      font-size: ${theme.fontSize.welcomePage_description_desktop};
    `)}
`;

const DarkCakeIcon = styled.div`
  width: 40%;
  ${theme.mixin.forMinWidth650(`
    width: 310px;
    `)}
`;

const LightCakeIcon = styled.div`
  display: none;
  ${theme.mixin.forMinWidth950(`
      display: flex;
      width: 320px;
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
