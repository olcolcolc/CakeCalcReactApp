import { render } from "@testing-library/react";
import Circle from "./Circle";

describe("Circle Component", () => {
  // Test to check if the circle renders with the provided number incremented by 1 as text content
  it("renders circle with the incremented number as text content", () => {
    // Render the Circle component with the value "3" as its child
    const { getByText } = render(<Circle>3</Circle>);
    // Find the circle element that should contain the text "4" since the child value gets incremented by 1
    const circleElement = getByText("4");
    // Ensure that the circle element with the incremented text content is present in the document
    expect(circleElement).toBeInTheDocument();
  });

  // Test to check if the default circle renders without crashing
  it("renders a default circle without crashing", () => {
    // Render the Circle component without providing any child value
    const { container } = render(<Circle>0</Circle>);
    // Find the first child element of the rendered Circle component
    const circleElement = container.firstChild;
    // Ensure that a circle element is present in the document
    expect(circleElement).toBeInTheDocument();
  });
});
