import { render } from "@testing-library/react";
import ButtonComponent from "./Button";

describe("ButtonComponent", () => {
  it("renders StartButton when name is 'start', with 'start' string inside", () => {
    const handleClick = vi.fn();
    const startWrapper = render(
      <ButtonComponent name="start" onClick={handleClick} />
    );
    const startButton = startWrapper.getByText("start");
    expect(startButton).toBeVisible();
  });

  it("renders NextButton when name is 'next', with 'next-button' test id and checks the text content", () => {
    const nextWrapper = render(<ButtonComponent name="next" />);
    const nextButton = nextWrapper.getByTestId("next-button");
    expect(nextButton).toBeVisible();
    expect(nextButton).toHaveTextContent("button.next");
  });

  it("renders NextButton when name is 'previous', with 'previous-button' test id and checks the text content", () => {
    const previousWrapper = render(<ButtonComponent name="previous" />);
    const previousButton = previousWrapper.getByTestId("previous-button");
    expect(previousButton).toBeVisible();
    expect(previousButton).toHaveTextContent("button.return");
  });
});
