import { render } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

describe("WelcomePage component", () => {
  it("renders with the correct labels and description", () => {
    const handleClick = vi.fn();

    const { getByText } = render(<WelcomePage onStartClick={handleClick} />);

    const label = getByText("welcomePage.label");
    const description = getByText("welcomePage.description");

    expect(label).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders the WelcomeIcon and a button", () => {
    const handleClick = vi.fn();

    const { getByAltText, getByRole } = render(
      <WelcomePage onStartClick={handleClick} />
    );

    const welcomeIcon = getByAltText("Welcome Icon");
    const startButton = getByRole("button", { name: "start" });

    expect(welcomeIcon).toBeInTheDocument();
    expect(startButton).toBeInTheDocument();
  });
  it("welcome page div renders correcly with window width 300px", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(<WelcomePage onStartClick={handleClick} />);

    const welcomePage = getByTestId("welcome-page-div");

    // change window width to 550px
    window.innerWidth = 550;
    expect(welcomePage).toHaveStyle("flex-direction: column");

    // change window width to 1550px
    window.innerWidth = 1550;
    setTimeout(() => {
      expect(welcomePage).toHaveStyle("flex-direction: row");
    }, 10);
  });
});
