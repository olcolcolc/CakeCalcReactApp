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

const Language = styled.button`
  ${theme.mixin.defaultButton};
  padding: 6px;
  font-family: "Medium_BasisGrotesqueArabicPro";
  text-transform: uppercase;
  font-size: ${theme.fontSize.base};
  font-weight: normal;
  &:focus {
    ${theme.mixin.buttonFocus}
  }

  &[data-isactive="true"] {
    font-weight: bold;
  }
`;

const LanguageButtons = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguageHandler = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    // I used the 'data-' prefix for custom attributes to ensure compliance with HTML standards and avoid potential validation issues.
    // Custom attributes without the 'data-' prefix wasn't recognized by HTML parsers and could lead to compatibility issues.
    // By prefixing custom isaxtive with 'data-', I ensure that the code is valid and interoperable across different browsers and tools.

    <LanguagesContainer data-testid="language-container">
      <Language
        onClick={() => changeLanguageHandler("pl")}
        data-isactive={currentLanguage === "pl"}
      >
        pl
      </Language>
      <span>/ </span>
      <Language
        onClick={() => changeLanguageHandler("en")}
        data-isactive={currentLanguage === "en"}
      >
        eng
      </Language>
    </LanguagesContainer>
  );
};

export default LanguageButtons;
