const mixin = {
  forDesktop: (content: string) => `
    @media screen and (min-width: 601px) {
      ${content}
    }
  `,

  defaultButton: () => `
    display: flex;
    all: unset;
    border-style: none;
    border-radius: 40px;
    cursor: pointer;
    padding: 10px 30px;
  `,
};

const colors = {
  mainBackground: "#ffafc4",
  startButton: "#34A9D1",
  startButtonHover: "#fd68a1",
  nextButton: "#FFADCC",
  nextButtonHover: "#34A9D1",
  againButton: "#FF2272",
  againButtonHover: "#DCF6BA",
  disabledButton: "#c4b3b3",
  white: "#ffffff",
  black: "#000000",
};

const fontSize = {
  base: "20px",
  button: "30px",
};

const fontFamily = {
  nunito: "'Nunito', sans-serif",
};

const padding = {
  default: "20px",
};

const margin = {
  default: "20px",
};

export const theme = {
  colors,
  fontSize,
  padding,
  margin,
  mixin,
  fontFamily,
};

export type Theme = typeof theme;
