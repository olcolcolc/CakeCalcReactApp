import styled from "styled-components";
import { theme } from "../../styles/theme";

const LogoContainer = styled.a`
  text-decoration: none;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.logoLink};
  padding: 0 10px;
  &:focus {
    ${theme.mixin.buttonFocus}
  }
`;

const CakeSpan = styled.span`
  font-family: "OggRoman";
  font-weight: 600;
`;

const CalcSpan = styled.span`
  margin-left: 10px;
  font-family: "Black_BasisGrotesqueArabicPro";
`;

const Logo = () => {
  return (
    <LogoContainer href="/" aria-label="Cake calc logo link">
      <CakeSpan>cake</CakeSpan>
      <CalcSpan>.calc</CalcSpan>
    </LogoContainer>
  );
};

export default Logo;
