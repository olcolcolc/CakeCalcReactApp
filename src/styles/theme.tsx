const mixin = {
  forDesktop: (content: string) => `
    @media screen and (min-width: 601px) {
      ${content}
    }
  `,

  defaultButton: () => `
    all: unset;
    text-transform: uppercase;
    cursor: pointer;
  `,
};

const colors = {
  mainBackground: "#ffafc4",
  white: "#ffffff",
  black: "#000000",
};

const fontSize = {
  base: "16px",
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
