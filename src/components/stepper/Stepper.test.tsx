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

    expect(progressBar).toBeInTheDocument();
    expect(buttonsContainer).toBeInTheDocument();
  });

  //   it("increases progress bar width when 'Next' button is clicked", () => {
  //     const { getByTestId } = render(
  //       <ThemeProvider theme={theme}>
  //         <Stepper />
  //       </ThemeProvider>
  //     );

  //     const progressBar = getByTestId("progress-bar");
  //     const nextButton = getByTestId("next-button");
  //     const initialTextContent = parseInt(progressBar.textContent ?? "0", 10);

  //     fireEvent.click(nextButton);

  //     expect(progressBar.textContent).toBe((initialTextContent + 1).toString());
  //   });

  it("disables 'Next' button when active step reaches the last step", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Stepper />
      </ThemeProvider>
    );

    const nextButton = getByTestId("next-button");
    const progressBar = getByTestId("progress-bar");

    // Go throught every step
    fireEvent.click(nextButton); // Step 1
    fireEvent.click(nextButton); // Step 2
    fireEvent.click(nextButton); // Step 3
    fireEvent.click(nextButton); // Step 4

    // Check if next button is disabled
    expect(nextButton).toBeDisabled();
    // Check if progress bar reached last step
    expect(progressBar).toHaveTextContent("12345");
  });
});
