const mixin = {
  forDesktop: (content: string) => `
    @media screen and (min-width: 601px) {
      ${content}
    }
  `,

  defaultButton: () => `
    all: unset;
    text-transform: uppercase;
    border-style: none;
    border-radius: 40px;
    padding: 20px 32px;
    cursor: pointer;
    font-weight: 700;
    `,

};

const colors = {
  mainBackground: "#ffafc4",
  startButton: "#34A9D1",
  startButtonHover: "#FFADCC",
  nextButton: "#FFADCC",
  nextButtonHover: "#34A9D1",
  againButton: "#FF2272",
  againButtonHover: "#DCF6BA",
  white: "#ffffff",
  black: "#000000",
};

const fontSize = {
  base: "16px",
  button: "30px"
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
};

export type Theme = typeof theme;
