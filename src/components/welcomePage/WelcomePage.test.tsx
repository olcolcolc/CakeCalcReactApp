import { render } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

describe("WelcomePage component", () => {
  it("renders with the correct description", () => {
    const handleClick = vi.fn();

    const { getByText } = render(<WelcomePage onStartClick={handleClick} />);

    const description = getByText("welcomePage.description");

    expect(description).toBeInTheDocument();
  });

  it("renders a start button", () => {
    const handleClick = vi.fn();

    const { getByRole } = render(<WelcomePage onStartClick={handleClick} />);

    const startButton = getByRole("button", { name: "start" });

    expect(startButton).toBeInTheDocument();
  });

  it("welcome page div renders correctly with window width 350px", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(<WelcomePage onStartClick={handleClick} />);

    const welcomePage = getByTestId("welcome-page-div");

    // Change window width to 350px
    window.innerWidth = 350;
    expect(welcomePage).toHaveStyle("flex-direction: column");

    // Change window width to 1550px after a timeout (due to async nature)
    setTimeout(() => {
      window.innerWidth = 1550;
      expect(welcomePage).toHaveStyle("flex-direction: row");
    }, 20);
  });
});
