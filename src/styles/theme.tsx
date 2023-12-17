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
  startButtonFocus: "#b50042",
  startButtonHover: "#2583A2",
  nextButton: "#2583A2",
  nextButtonHover: "#E30259",
  nextButtonFocus: "#145377",
  stepper: "#2583A2",
  disabledButton: "#575757",
  white: "#ffffff",
  black: "#000000",
  sprinkle: "#e569a0",
  input: "#464141",
};

const fontSize = {
  base: "26px",
  button: "30px",
  annotation: "16px",
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
