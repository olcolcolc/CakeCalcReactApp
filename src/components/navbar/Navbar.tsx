import React, { useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";
import i18n from "i18next";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: inherit;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: space-between;
`;

const LogoLink = styled.a`
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border-radius: 20px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
    outline: none;
  }
`;

const Language = styled.button`
  border-style: none;
  padding: 15px;
  &:focus {
    border-radius: 50%;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

const Navbar: React.FC = () => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const toggleLanguage = () => {
    setIsEnglishLanguage(!isEnglishLanguage);
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "pl" ? "en" : "pl";
    changeLanguage(newLanguage);
  };

  return (
    <NavbarContainer className="navbar">
      <LogoLink href="/" data-testid="logo-container">
        {/* <Icon name="logo" /> */}
      </LogoLink>
      <Language onClick={toggleLanguage}>
        {i18n.language === "pl" ? "en" : "pl"}
      </Language>
    </NavbarContainer>
  );
};

export default Navbar;
