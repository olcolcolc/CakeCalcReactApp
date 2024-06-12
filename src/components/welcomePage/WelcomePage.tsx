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
  padding: 0 1.25rem;
  ${theme.mixin.forMinWidth650(`
        flex-direction: row;
        margin: 4rem 2rem 1.8rem 2rem;
    `)}
`;

const CenterWrapper = styled.div`
  flex-direction: column;
  ${theme.mixin.forMinWidth650(`
      margin: 0 2rem;
    `)}
`;

const Description = styled.p`
  display: flex;
  margin: 0 1rem;
  line-height: 4rem;
  max-width: 44rem;
  font-size: ${theme.fontSize.welcomePage_description_mobile};
  font-family: "OggRoman";
  ${theme.mixin.forMinWidth650(`
      font-size: ${theme.fontSize.welcomePage_description_desktop};
    `)}
`;

const DarkCakeIcon = styled.div`
  width: 40%;
  ${theme.mixin.forMinWidth650(`
    width: 19rem;
    `)}
`;

const LightCakeIcon = styled.div`
  display: none;
  ${theme.mixin.forMinWidth950(`
      display: flex;
      width: 20rem;
  `)}
`;

interface WelcomePageProps {
  onStartClick: (e: React.MouseEvent) => void;
}

const WelcomePage = ({ onStartClick }: WelcomePageProps) => {
  const { t } = useTranslation();

  return (
    <WelcomePageDiv data-testid="welcome-page-div">
      <DarkCakeIcon data-testid="dark-cake-icon">
        <Icon name="darkCake" aria-label="chocolate cake with candles" />
      </DarkCakeIcon>
      <CenterWrapper>
        <Description data-testid="description">
          {t("welcomePage.description")}
        </Description>
        <Button type="start" onClick={onStartClick} />
      </CenterWrapper>
      <LightCakeIcon data-testid="light-cake-icon">
        <Icon name="lightCake" aria-label="cream cake with candles" />
      </LightCakeIcon>
    </WelcomePageDiv>
  );
};

export default WelcomePage;
