import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders Navbar and WelcomePage initially", () => {
    render(<App />);
    const message = screen.queryByText(/Hello World/i);
    expect(message).toBeVisible(); // Check if Navbar is rendered
  });
});
