import { render } from "@testing-library/react";
import ButtonComponent from "./Button";
import { mock } from "node:test";

describe("ButtonComponent", () => {
  it("renders StartButton correctly", () => {
    const handleClick = mock.fn();

    const startWrapper = render(
      <ButtonComponent name="start" onClick={handleClick} />
    );

    const startButton = startWrapper.getByText("start");
    expect(startButton).toBeInTheDocument();
  });
});
