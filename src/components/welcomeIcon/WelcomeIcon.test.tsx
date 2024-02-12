import { render } from "@testing-library/react";
import WelcomeIcon from "./WelcomeIcon";

describe("WelcomeIcon component", () => {
  it("renders with correct src and alt attributes", () => {
    const testSrc = "test-image.jpg";
    const testAlt = "Test Image";
    const { getByAltText } = render(
      <WelcomeIcon src={testSrc} alt={testAlt} />
    );

    const renderedImage = getByAltText(testAlt) as HTMLImageElement;

    expect(renderedImage).toBeInTheDocument();
    expect(renderedImage.src).toContain(testSrc);
    expect(renderedImage.alt).toBe(testAlt);
  });
  it("The icon responds well to changes in the browser window width", () => {
    const { getByAltText } = render(<WelcomeIcon src={"test"} alt={"test"} />);

    const renderedImage = getByAltText("test") as HTMLImageElement;

    // change window width to 550px
    window.innerWidth = 550;
    expect(renderedImage).toHaveStyle("width: 200px");

    // change window width to 1550px
    window.innerWidth = 1550;
    setTimeout(() => {
      expect(renderedImage).toHaveStyle("width: 300px");
    }, 10);
  });
});
