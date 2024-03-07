const mixin = {
  forMinWidth450: (content: string) => `
  @media screen and (min-width: 450px) {
    ${content}
  }
`,
  forMinWidth650: (content: string) => `
@media screen and (min-width: 650px) {
  ${content}
}
`,
  forMinWidth750: (content: string) => `
@media screen and (min-width: 750px) {
  ${content}
}
`,
  forMinWidth950: (content: string) => `
@media screen and (min-width: 950px) {
  ${content}
}
`,

  defaultButton: () => `
    display: flex;
    all: unset;
    margin: 0 auto;
    border-style: none;
    cursor: pointer;
    text-transform: capitalize; 
  `,

  buttonFocus: () => `
    border-radius: 30px;
    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.3);
    outline: none;
    `,
};

const colors = {
  disabledButton: "#575757",
  white: "#ffffff",
  black: "#000000",
  yellow: "#F9D644",
  pink: "#F88B9E",
  lightPink: "#F8A4B3",
  grey: "#F7F7F7",
};

const fontSize = {
  logoLink: "28px",
  base: "22px",
  annotation_desktop: "22px",
  annotation_mobile: "16px",
  button_start: "30px",
  welcomePage_description_desktop: "50px",
  welcomePage_description_mobile: "36px",
  stepHeader_desktop: "52px",
  stepHeader_mobile: "38px",
  outputValues_mobile: "30px",
};

export const theme = {
  colors,
  fontSize,
  mixin,
};

export type Theme = typeof theme;
