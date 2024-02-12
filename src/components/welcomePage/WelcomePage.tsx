import styled from "@emotion/styled";
import welcomeIcon from "../../assets/beforeUpdate/welcome_icon.png";
import { theme } from "../../styles/theme";
import Button from "../button/Button";
import WelcomeIcon from "../welcomeIcon/WelcomeIcon";
import { useTranslation } from "react-i18next";

const WelcomePageDiv = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${theme.mixin.forDesktop(`
        flex-direction: row;
    `)}
`;

const Label = styled.div`
  text-align: center;
  font-family: ${theme.fontFamily.nunito};
  font-size: 50px;
  font-weight: 900;
  ${theme.mixin.forDesktop(`
        text-align: right;
        font-size: 80px;
    `)}
`;

const Description = styled.div`
  display: flex;
  text-align: center;
  font-size: 25px;
  font-family: ${theme.fontFamily.nunito};
  ${theme.mixin.forDesktop(`
        text-align: right;
        font-size: 40px;
    `)}
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${theme.mixin.forDesktop(`
        margin-top: 160px;
    `)}
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface WelcomePageProps {
  onStartClick: (e: React.MouseEvent) => void;
}

const WelcomePage = ({ onStartClick }: WelcomePageProps) => {
  // Get the translation function 't' and the i18n instance from the useTranslation hook
  const { t } = useTranslation();

  return (
    <WelcomePageDiv data-testid="welcome-page-div">
      <LeftWrapper>
        <Label data-testit="label">{t("welcomePage.label")}</Label>
        <Description data-testit="description">
          {t("welcomePage.description")}
        </Description>
      </LeftWrapper>
      <RightWrapper>
        <WelcomeIcon src={welcomeIcon} alt="Welcome Icon" />
        <Button name="start" onClick={onStartClick} />
      </RightWrapper>
    </WelcomePageDiv>
  );
};

export default WelcomePage;
