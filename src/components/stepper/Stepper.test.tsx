import { render, fireEvent } from "@testing-library/react";
import Stepper from "./Stepper";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";

describe("Stepper Component", () => {
  it("renders with initial values", () => {
    const setIsLastStep = () => {
      console.log("Function setIsLastStep called");
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Stepper
          isLastStep={false}
          setIsLastStep={() => {
            setIsLastStep;
          }}
        />
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
    const setIsLastStep = () => {
      console.log("Function setIsLastStep called.");
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Stepper
          isLastStep={false}
          setIsLastStep={() => {
            setIsLastStep;
          }}
        />
      </ThemeProvider>
    );

    const nextButton = getByTestId("next-button");
    const circleNr1 = getByTestId("circle-1");

    fireEvent.click(nextButton);
    // Check if Circle content increased from 0 to 1
    expect(circleNr1).toHaveTextContent("2");
  });

  it("disables 'Next' button when active step reaches the last step", () => {
    const setIsLastStep = () => {
      console.log("Function setIsLastStep called.");
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Stepper isLastStep={false} setIsLastStep={setIsLastStep} />
      </ThemeProvider>
    );

    const nextButton = getByTestId("next-button");
    const progressBar = getByTestId("progress-bar");

    // Go throught every step to be at the last step
    for (let i = 0; i < 4; i++) {
      fireEvent.click(nextButton);
    }

    // Check if next button is disabled
    expect(nextButton).toBeDisabled();
    // Check if progress bar reached last step
    expect(progressBar).toHaveTextContent("12345");
  });
});
