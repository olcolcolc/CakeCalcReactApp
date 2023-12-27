import { render } from "@testing-library/react";
import MainContainerComponent from "./MainContainer";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";

describe("MainContainerComponent", () => {
  it("contains MainContainer component", () => {
    // Render MainContainerComponent within ThemeProvider using the specified theme
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MainContainerComponent />
      </ThemeProvider>
    );

    const mainContainer = getByTestId("main-container");
    expect(mainContainer).toBeVisible();
  });

  it("has 100% width at 550px window", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MainContainerComponent />
      </ThemeProvider>
    );

    const mainContainer = getByTestId("main-container");
    window.innerWidth = 550;
    window.dispatchEvent(new Event("resize"));

    const computedStyles = window.getComputedStyle(mainContainer);
    const width = computedStyles.getPropertyValue("width");

    expect(width).toBe("100%");
  });
});
