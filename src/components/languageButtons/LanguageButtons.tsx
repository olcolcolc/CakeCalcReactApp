import styled from "styled-components";
import { theme } from "../../styles/theme";
import i18n from "i18next";
import { useState } from "react";

const LanguagesContainer = styled.div`
  text-decoration: none;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.base};
  padding-right: 20px;
  position: absolute;
  right: 0px;
  margin: 4px;
  ${theme.mixin.forMinWidth950(`
        margin-right: 80px;
  `)}
`;

const Language = styled.button<{ isactive: boolean }>`
  ${theme.mixin.defaultButton};
  padding: 6px;
  font-family: "Medium_BasisGrotesqueArabicPro";
  text-transform: uppercase;
  font-weight: ${(props) => (props.isactive ? "bold" : "normal")};
  font-size: ${theme.fontSize.base};
  &:focus {
    ${theme.mixin.buttonFocus}
  }
`;

const LanguageButtons = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <LanguagesContainer>
      <Language
        onClick={() => changeLanguage("pl")}
        isactive={currentLanguage === "pl"}
      >
        pl
      </Language>
      <span>/ </span>
      <Language
        onClick={() => changeLanguage("en")}
        isactive={currentLanguage === "en"}
      >
        eng
      </Language>
    </LanguagesContainer>
  );
};

export default LanguageButtons;
