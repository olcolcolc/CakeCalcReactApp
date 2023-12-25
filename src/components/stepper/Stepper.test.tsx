import { render, fireEvent } from "@testing-library/react";
import Stepper from "./Stepper";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";

describe("Stepper Component", () => {
  it("renders with initial values", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Stepper />
      </ThemeProvider>
    );

    const progressBar = getByTestId("progress-bar");
    const buttonsContainer = getByTestId("buttons-container");
    const previousButton = getByTestId("previous-button");

    expect(progressBar).toBeInTheDocument();
    expect(buttonsContainer).toBeInTheDocument();
    expect(previousButton).toBeDisabled();
  });

  it("increases circle content when 'Next' button is clicked", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Stepper />
      </ThemeProvider>
    );

    const progress = getByTestId("progress");
    const nextButton = getByTestId("next-button");
    const activeCircle = document.querySelector(".active");

    fireEvent.click(nextButton);
    // Check if Circle content increased from 0 to 1
    expect(activeCircle).toHaveTextContent("1");
    // Check if progress has width 25%
    expect(progress).toHaveStyle("width: 25%");
  });

  it("disables 'Next' button when active step reaches the last step", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Stepper />
      </ThemeProvider>
    );

    const nextButton = getByTestId("next-button");
    const progressBar = getByTestId("progress-bar");
    const progress = getByTestId("progress");
    expect(progress).toHaveStyle("width: 0%");

    // Go throught every step to be at the last step
    for (let i = 0; i < 4; i++) {
      fireEvent.click(nextButton);
    }

    // Check if next button is disabled
    expect(nextButton).toBeDisabled();
    // Check if progress bar reached last step
    expect(progressBar).toHaveTextContent("12345");
    // Check if progress has width 100%
    expect(progress).toHaveStyle("width: 100%");
  });
});
