const mixin = {
  forDesktop: (content: string) => `
    @media screen and (min-width: 601px) {
      ${content}
    }
  `,

  forMaxWidth450: (content: string) => `
  @media screen and (max-width: 450px) {
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
  againButtonHover: "#c8ee98",
  disabledButton: "#c4b3b3",
  white: "#ffffff",
  black: "#000000",
  sprinkle: "#e569a0",
};

const fontSize = {
  base: "20px",
  button: "30px",
};

const fontFamily = {
  nunito: "'Nunito', sans-serif",
};

export const theme = {
  colors,
  fontSize,
  mixin,
  fontFamily,
};

export type Theme = typeof theme;
