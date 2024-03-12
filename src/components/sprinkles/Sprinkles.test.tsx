import { render } from "@testing-library/react";
import Sprinkles from "./Sprinkles";

describe("Sprinkle Component", () => {
  it("renders correct number of SprinkleDiv elements", () => {
    const { getAllByTestId } = render(<Sprinkles />);
    const sprinkleDivElements = getAllByTestId("sprinkle-div");

    // Oczekujemy, że liczba elementów SprinkleDiv będzie równa długości tablicy doubledSprinkles
    expect(sprinkleDivElements.length).toBe(20); // Zakładając, że doubledSprinkles zawiera 10 elementów
  });
});
