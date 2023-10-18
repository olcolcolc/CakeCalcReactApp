import React, { useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: inherit;
  flex-direction: row;
  align-items: center;
  height: 100px;
  justify-content: space-between;
  margin: 10px 0 10px 0;
  cursor: pointer;
`;

const English = styled.button`
  display: flex;
  border-style: none;
  cursor: pointer;
`;

const Polish = styled.button`
  display: flex;
  border-style: none;
  cursor: pointer;
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
