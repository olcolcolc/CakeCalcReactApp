import React, { useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";

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

const English = styled.button`
  ${theme.mixin.defaultButton}; 
`;

const Polish = styled.button`
 ${theme.mixin.defaultButton}; 
`;

const Navbar: React.FC = () => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  const toggleLanguage = () => {
    setIsEnglishLanguage(!isEnglishLanguage);
  };

  return (
    <NavbarContainer className="navbar">
      <Icon name="logo" />
      {isEnglishLanguage ? (
        <English onClick={toggleLanguage}>En</English>
      ) : (
        <Polish onClick={toggleLanguage}>Pl</Polish>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
