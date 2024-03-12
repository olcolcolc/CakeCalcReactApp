import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("renders logo and language buttons", () => {
    const { getByTestId } = render(<Navbar />);
    const logoContainer = getByTestId("logo-container");
    const languageButtons = getByTestId("language-container");

    expect(logoContainer).toBeInTheDocument();
    expect(languageButtons).toBeInTheDocument();
  });

  it("renders with correct styles", () => {
    const { getByTestId } = render(<Navbar />);
    const navbarContainer = getByTestId("navbar-container");
    global.innerWidth = 300;

    expect(navbarContainer).toHaveStyle(`
      justify-content: start;
    `);
  });
});
