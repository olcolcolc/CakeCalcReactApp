import { render } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon Component", () => {
  const testIcon = (iconName: string, width: string, height: string) => {
    it(`renders ${iconName} icon correctly`, () => {
      const { container } = render(<Icon name={iconName} />);
      const svgElement = container.querySelector("svg");

      expect(svgElement).toBeInTheDocument();
      expect(svgElement?.getAttribute("width")).toBe(width.toString());
      expect(svgElement?.getAttribute("height")).toBe(height.toString());
    });
  };

  testIcon("darkCake", "100%", "100%");
  testIcon("lightCake", "100%", "460");
  testIcon("donut", "140", "162");
  testIcon("sprinkle1", "13", "12");
  testIcon("sprinkle2", "13", "12");
  testIcon("sprinkle3", "14", "12");
  testIcon("sprinkle4", "13", "10");
  testIcon("sprinkle5", "12", "11");
  testIcon("sprinkle6", "13", "10");
  testIcon("sprinkle7", "12", "10");
  testIcon("sprinkle8", "11", "11");
  testIcon("sprinkle9", "15", "13");
  testIcon("sprinkle10", "11", "9");
});
