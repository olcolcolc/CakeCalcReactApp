import styled from "styled-components";
import { theme } from "../../styles/theme";

const LogoContainer = styled.a`
  text-decoration: none;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.logoLink};
  padding: 2px 20px 0 20px;
  &:focus {
    ${theme.mixin.buttonFocus}
  }
`;

const CakeSpan = styled.span`
  font-family: "OggRoman";
  font-weight: 400;
  line-height: 44.28px;
`;

const CalcSpan = styled.span`
  font-family: "Medium_BasisGrotesqueArabicPro";
  font-weight: 500;
  line-height: 28.66px;
`;

const Logo = () => {
  return (
    <LogoContainer href="/" aria-label="Cake calc logo link">
      <CakeSpan>cake </CakeSpan>
      <CalcSpan>.calc</CalcSpan>
    </LogoContainer>
  );
};

export default Logo;
