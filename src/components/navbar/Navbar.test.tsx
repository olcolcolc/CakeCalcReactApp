import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { fn } from "@vitest/spy";
import i18n from "i18next";

// Mocking the changeLanguage function
const changeLanguageMock = fn();
i18n.changeLanguage = changeLanguageMock;

describe("Navbar Component", () => {
  it("changes language when language button is clicked", () => {
    const { getByText } = render(<Navbar />); // Renders the Navbar component

    const languageButton = getByText(/en|pl/i); // Finds the language button in the rendered Navbar
    fireEvent.click(languageButton); // Simulates a click on the language button

    // Checks if the mocked changeLanguage function has been called
    expect(changeLanguageMock).toHaveBeenCalled();
    // Checks if the text corresponding to the selected language is present in the Navbar
    expect(getByText(/en|pl/i)).toBeInTheDocument();
  });

  it("redirects to '/' when logo is clicked", () => {
    const { getByTestId } = render(<Navbar />);

    const logoContainer = getByTestId("logo-container");
    fireEvent.click(logoContainer);

    expect(window.location.pathname).toBe("/");
  });
});
