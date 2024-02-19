import styled from "styled-components";
import { theme } from "../../styles/theme";
import i18n from "i18next";
import { useState } from "react";

const LanguagesContainer = styled.div`
  text-decoration: none;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.base};
  padding: 0;
  position: absolute;
  right: 0px;
  margin: 0 10px 4px 0;
`;

const Language = styled.button<{ isActive: boolean }>`
  ${theme.mixin.defaultButton};
  padding: 6px;
  font-family: "Medium_BasisGrotesqueArabicPro";
  text-transform: uppercase;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  font-size: ${(props) =>
    props.isActive ? theme.fontSize.languageButtons_active : ""};
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
        isActive={currentLanguage === "pl"}
      >
        pl
      </Language>
      <span>/ </span>
      <Language
        onClick={() => changeLanguage("en")}
        isActive={currentLanguage === "en"}
      >
        en
      </Language>
    </LanguagesContainer>
  );
};

export default LanguageButtons;
