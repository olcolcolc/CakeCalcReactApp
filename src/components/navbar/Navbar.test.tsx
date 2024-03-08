import { getByTestId, render, waitFor } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component - Responsive", () => {
  it("renders correctly for desktop view", async () => {
    global.innerWidth = 1600; // Ustawiamy szerokość większą niż 450px dla desktopu
    const { getByTestId } = render(<Navbar />);
    await waitFor(() => {
      const navbarContainer = getByTestId("navbar-container");
      console.log(navbarContainer.style.justifyContent);

      expect(navbarContainer).toHaveStyle("justify-content: center");
    });
  });

  it("renders correctly for mobile view", async () => {
    global.innerWidth = 300; // Ustawiamy szerokość mniejszą niż 450px dla mobilnego widoku
    const { getByTestId } = render(<Navbar />);
    await waitFor(() => {
      const navbarContainer = getByTestId("navbar-container");
      expect(navbarContainer).toHaveStyle("justify-content: start");
    });
  });
});
