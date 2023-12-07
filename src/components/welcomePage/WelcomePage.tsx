import React from "react";
import styled from "@emotion/styled";
import welcomeIcon from "../../assets/welcome_icon.png";
import { theme } from "../../styles/theme";
import Button from "../button/Button";
import WelcomeIcon from "../welcome-icon/WelcomeIcon";

const WelcomePageDiv = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-right: 30px;
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
  return (
    <WelcomePageDiv>
      <LeftWrapper>
        <Label>cześć!</Label>
        <Description>oblicz cenę i wielkość swojego tortu</Description>
      </LeftWrapper>
      <RightWrapper>
        <WelcomeIcon src={welcomeIcon} alt="Welcome Icon" />
        <Button name="start" onClick={onStartClick} />
      </RightWrapper>
    </WelcomePageDiv>
  );
};

export default WelcomePage;
