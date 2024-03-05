import React from "react";
import styled from "@emotion/styled";
import Logo from "../logo/Logo";
import LanguageButtons from "../languageButtons/LanguageButtons";
import { theme } from "../../styles/theme";

const NavbarContainer = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  background-color: inherit;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: start;
  margin-bottom: 0px;

  ${theme.mixin.forMinWidth450(`
    justify-content: center;
  `)}
  ${theme.mixin.forMinWidth650(`
    margin-bottom: 20px;
  `)}
  ${theme.mixin.forMinWidth950(`
    margin-bottom: 30px;
  `)}
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
