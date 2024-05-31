import { render } from "@testing-library/react";
import ButtonComponent from "./Button";

describe("ButtonComponent", () => {
  it("renders StartButton when type is 'start', with 'start' string inside", () => {
    const handleClick = vi.fn();
    const startWrapper = render(
      <ButtonComponent type="start" onClick={handleClick} />
    );
    const startButton = startWrapper.getByText("start");
    expect(startButton).toBeVisible();
  });

  it("renders NextButton when type is 'next', with 'next-button' test id and checks the text content", () => {
    const nextWrapper = render(<ButtonComponent type="next" />);
    const nextButton = nextWrapper.getByTestId("next-button");
    expect(nextButton).toBeVisible();
    expect(nextButton).toHaveTextContent("button.next");
  });

  it("renders NextButton when type is 'previous', with 'previous-button' test id and checks the text content", () => {
    const previousWrapper = render(<ButtonComponent type="previous" />);
    const previousButton = previousWrapper.getByTestId("previous-button");
    expect(previousButton).toBeVisible();
    expect(previousButton).toHaveTextContent("button.return");
  });
});
