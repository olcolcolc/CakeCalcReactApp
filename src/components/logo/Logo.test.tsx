import { render } from "@testing-library/react";
import Logo from "./Logo";
import { theme } from "../../styles/theme";

describe("Logo component", () => {
  it("renders logo link correctly", () => {
    const { getByTestId, getByText } = render(<Logo />);

    // Check if the logo container is present
    const logoContainer = getByTestId("logo-container");
    expect(logoContainer).toBeInTheDocument();

    // Check if the link has href and aria-label properties
    expect(logoContainer).toHaveAttribute("href", "/");
    expect(logoContainer).toHaveAttribute("aria-label", "Cake calc logo link");

    // Check if the spans with text are present and contain the correct text
    const cakeSpan = getByText("cake");
    const calcSpan = getByText(".calc");
    expect(cakeSpan).toBeInTheDocument();
    expect(calcSpan).toBeInTheDocument();

    // Check logoContainer's styles
    expect(logoContainer).toHaveStyle(`
      text-decoration: none;
      color: ${theme.colors.black};
      font-size: ${theme.fontSize.logoLink};
      padding: 2px 20px 0 20px;
    `);

    // Check CakeSpan's styles
    expect(cakeSpan).toHaveStyle(`
      font-family: "OggRoman";
      font-weight: 400;
      line-height: 44.28px;
    `);

    // Check CalcSpan's styles
    expect(calcSpan).toHaveStyle(`
      font-family: "Medium_BasisGrotesqueArabicPro";
      font-weight: 500;
      line-height: 28.66px;
    `);
  });
});
