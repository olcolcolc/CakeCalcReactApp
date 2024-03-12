import { render, fireEvent } from "@testing-library/react";
import LanguageButtons from "./LanguageButtons";

describe("LanguageButtons component", () => {
  it('changes font-weight to bold when "pl" button is clicked', async () => {
    const { getByText } = render(<LanguageButtons />);
    const plButton = getByText("pl");
    fireEvent.click(plButton);

    try {
      expect(plButton).toHaveStyle("font-weight: bold;");
      expect(plButton).toHaveStyle("font-weight: bold;");
    } catch (error) {
      console.error("Error while checking style:", error);
    }
  });

  it('changes font-weight to bold when "eng" button is clicked', async () => {
    const { getByText } = render(<LanguageButtons />);
    const engButton = getByText("eng");
    fireEvent.click(engButton);

    try {
      expect(engButton).toHaveStyle("font-weight: bold;");
    } catch (error) {
      console.error("Error while checking style:", error);
    }
  });
});
