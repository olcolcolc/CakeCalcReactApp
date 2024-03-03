import { render } from "@testing-library/react";
import SprinkleAnimation from "./Sprinkles";

describe("SprinkleAnimation Component", () => {
  it("renders without crashing", () => {
    render(<SprinkleAnimation />);
  });

  it("renders 50 sprinkle elements", () => {
    const { container } = render(<SprinkleAnimation />);
    const sprinkleElements = container.querySelectorAll(".sprinkle");

    expect(sprinkleElements.length).toBe(50);
  });
});
