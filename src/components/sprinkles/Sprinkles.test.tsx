import { render } from "@testing-library/react";
import Sprinkles from "./Sprinkles";

describe("Sprinkle Component", () => {
  it("renders correct number of SprinkleDiv elements", () => {
    const { getAllByTestId } = render(<Sprinkles />);
    const sprinkleDivElements = getAllByTestId("sprinkle-div");

    // Check if the number of SprinkleDiv elements is equal to the length of the doubledSprinkles array
    expect(sprinkleDivElements.length).toBe(20);
  });
});
