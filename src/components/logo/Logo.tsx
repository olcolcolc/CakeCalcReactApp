import styled from "styled-components";
import { theme } from "../../styles/theme";

const LogoContainer = styled.a`
  text-decoration: none;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.logoLink};
  padding: 0.15rem 1.25rem 0 1.15rem;
  &:focus {
    ${theme.mixin.buttonFocus}
  }
`;

const CakeSpan = styled.span`
  font-family: "OggRoman";
  font-weight: 400;
  line-height: 3rem;
`;

const CalcSpan = styled.span`
  font-family: "Medium_BasisGrotesqueArabicPro";
  font-weight: 500;
  line-height: 2rem;
`;

const Logo = () => {
  return (
    <LogoContainer
      href="/"
      aria-label="Cake calc logo link"
      data-testid="logo-container"
    >
      <CakeSpan>cake </CakeSpan>
      <CalcSpan>.calc</CalcSpan>
    </LogoContainer>
  );
};

export default Logo;
