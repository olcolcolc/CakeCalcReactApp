import { render } from "@testing-library/react";
import MainContainerComponent from "./MainContainer";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";

describe("MainContainerComponent", () => {
  it("contains Stepper component", () => {
    // Render MainContainerComponent within ThemeProvider using the specified theme
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MainContainerComponent />
      </ThemeProvider>
    );
    const stepperComponent = getByTestId("stepper-component");

    expect(stepperComponent).toBeInTheDocument();
  });
});
