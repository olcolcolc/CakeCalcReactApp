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
    padding: 10px 40px;
  `,
};

const colors = {
  mainBackground: "#ffc782",
  startButton: "#E30259",
  startButtonHover: "#2583A2",
  nextButton: "#2583A2",
  nextButtonHover: "#E30259",
  stepper: "#2583A2",
  disabledButton: "#575757",
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
