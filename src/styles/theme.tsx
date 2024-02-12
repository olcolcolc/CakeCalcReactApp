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
    margin: 0 auto;
    border-style: none;
    cursor: pointer;
    text-transform: capitalize; 
  `,
};

const colors = {
  disabledButton: "#575757",
  white: "#ffffff",
  black: "#000000",
  sprinkle: "#e569a0",
  input: "#464141",
  yellow: "#F9D644",
  pink: "#F88B9E",
  lightPink: "#F8A4B3",
  grey: "#F7F7F7",
};

const fontSize = {
  base: "26px",
  startButton: "30px",
  nextButton: "22px",
  annotation: "16px",
  stepper: "29px",
};

const fontFamily = {
  nunito: "'Nunito', sans-serif",
};

const fontStyle = {
  favorit: "'Favorit', sans-serif",
  ogg: "'Ogg', serif",
};
export const theme = {
  colors,
  fontSize,
  mixin,
  fontFamily,
  fontStyle,
};

export type Theme = typeof theme;
