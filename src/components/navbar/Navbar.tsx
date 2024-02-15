import React from "react";
import styled from "@emotion/styled";
import Logo from "../logo/Logo";
import LanguageButtons from "../languageButtons/LanguageButtons";

const NavbarContainer = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  background-color: inherit;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: center;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer className="navbar">
      <Logo data-testid="logo-container" />
      <LanguageButtons />
    </NavbarContainer>
  );
};

export default Navbar;
