import { render } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon Component", () => {
  it("renders logo icon correctly", () => {
    const iconName = "logo";
    const { container } = render(<Icon name={iconName} />);
    const svgElement = container.querySelector("svg");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement?.getAttribute("width")).toBe("115");
    expect(svgElement?.getAttribute("height")).toBe("60");
  });
});
