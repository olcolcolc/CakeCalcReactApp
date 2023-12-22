import { render } from "@testing-library/react";
import Output from "./Output";

describe("Output Component", () => {
  const mockCakeValues = {
    howManyPortions: "10",
    cakesHigh: "3",
    pricePerOnePerson: "5",
    advance: "20",
  };

  it("renders output values correctly", () => {
    const { getByText } = render(<Output cakeValues={mockCakeValues} />);

    expect(getByText("Cake Price")).toBeInTheDocument();
    expect(getByText("Deposit")).toBeInTheDocument();
    expect(getByText("Cake Diameter")).toBeInTheDocument();

    expect(getByText("50currency")).toBeInTheDocument();
    expect(getByText("10currency")).toBeInTheDocument();
    expect(getByText("30ø")).toBeInTheDocument();
  });
});
