import { render } from "@testing-library/react";
import ButtonComponent from "./Button";
import { mock } from "node:test";

describe("ButtonComponent", () => {
  it("renders StartButton when name is 'start', with 'start' string inside", () => {
    const handleClick = mock.fn();
    const startWrapper = render(
      <ButtonComponent name="start" onClick={handleClick} />
    );
    const startButton = startWrapper.getByText("start");
    expect(startButton).toBeInTheDocument();
  });

  it("renders NextButton when name is 'next', with 'next-button' class", () => {
    const nextWrapper = render(<ButtonComponent name="next" />);
    const nextButton = nextWrapper.getByTestId("next-button");
    expect(nextButton).toBeInTheDocument();
  });

  it("renders NextButton when name is 'previous', with 'previous-button' class", () => {
    const previousWrapper = render(<ButtonComponent name="previous" />);
    const previousButton = previousWrapper.getByTestId("previous-button");
    expect(previousButton).toBeInTheDocument();
  });
});
