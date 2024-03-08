import React from "react";
import styled from "@emotion/styled";
import Logo from "../logo/Logo";
import LanguageButtons from "../languageButtons/LanguageButtons";
import { theme } from "../../styles/theme";

const NavbarContainer = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  height: 100px;
  justify-content: start;
  ${theme.mixin.forMinWidth450(`
    justify-content: center;
  `)}
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer data-testid="navbar-container">
      <Logo data-testid="logo-container" />
      <LanguageButtons />
    </NavbarContainer>
  );
};

export default Navbar;
