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

  it("main container responds well to changes in the browser window width", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MainContainerComponent />
      </ThemeProvider>
    );

    const mainContainer = getByTestId("main-container");
    // change window width to 550px
    window.innerWidth = 550;
    expect(mainContainer).toHaveStyle("width: 100%");

    // change window width to 1550px
    window.innerWidth = 1550;
    setTimeout(() => {
      expect(mainContainer).toHaveStyle("width: 200px");
    }, 10);
  });
});
