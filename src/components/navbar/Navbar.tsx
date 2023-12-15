import React, { useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";
import i18n from "i18next";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: inherit;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  cursor: pointer;
`;

const Language = styled.button`
  ${theme.mixin.defaultButton};
  padding: 10px;
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
      <Icon name="logo" />
      <Language onClick={toggleLanguage}>
        {i18n.language === "pl" ? "en" : "pl"}
      </Language>
    </NavbarContainer>
  );
};

export default Navbar;
