import { render } from "@testing-library/react";
import Output from "./Output";

describe("Output Component", () => {
  it("calculates values correctly based on cakeValues", () => {
    const cakeValues = {
      howManyPortions: "15",
      cakesHigh: "7",
      pricePerOnePerson: "10",
      advance: "20",
    };

    const { getByTestId } = render(<Output cakeValues={cakeValues} />);

    // Elements containing calculated values using data-testid attributes
    const totalPriceElement = getByTestId("cake-price-value");
    const advancePriceElement = getByTestId("deposit-value");
    const validDiameterElement = getByTestId("cake-diameter-value");

    // Parse the textContent of elements to obtain calculated values
    const totalPrice = parseFloat(totalPriceElement.textContent || "0");
    const advancePrice = parseFloat(advancePriceElement.textContent || "0");
    const validDiameter = parseFloat(
      validDiameterElement.textContent?.replace("ø", "") || "0"
    );

    // Expected values
    const expectedTotalPrice = 150;
    const expectedAdvancePrice = 30;
    const expectedValidDiameter = 20;

    // Assertions to compare the calculated values with expected values
    expect(totalPrice).toEqual(expectedTotalPrice);
    expect(advancePrice).toEqual(expectedAdvancePrice);
    expect(validDiameter).toEqual(expectedValidDiameter);
  });

  it("initially renders with correct values based on initial cakeValues", () => {
    const cakeValues = {
      howManyPortions: "15",
      cakesHigh: "7",
      pricePerOnePerson: "10",
      advance: "20",
    };

    const { getByTestId } = render(<Output cakeValues={cakeValues} />);

    // Check if the initial values are visible or if certain elements are present
    expect(getByTestId("output-header")).toBeInTheDocument();
    expect(getByTestId("output-container")).toBeInTheDocument();
    expect(getByTestId("cake-price-element")).toBeInTheDocument();
    expect(getByTestId("cake-price-element")).toBeInTheDocument();
    expect(getByTestId("cake-price-value")).toBeInTheDocument();
    expect(getByTestId("deposit-element")).toBeInTheDocument();
    expect(getByTestId("deposit-value")).toBeInTheDocument();
    expect(getByTestId("cake-diameter-element")).toBeInTheDocument();
    expect(getByTestId("cake-diameter-value")).toBeInTheDocument();
  });

  it("updates values correctly based on changed cakeValues", () => {
    const initialCakeValues = {
      howManyPortions: "15",
      cakesHigh: "7",
      pricePerOnePerson: "10",
      advance: "20",
    };

    const changedCakeValues = {
      howManyPortions: "20",
      cakesHigh: "9",
      pricePerOnePerson: "15",
      advance: "25",
    };

    const { getByTestId, rerender } = render(
      <Output cakeValues={initialCakeValues} />
    );

    // Re-render with changed values
    rerender(<Output cakeValues={changedCakeValues} />);

    // Elements containing calculated values using data-testid attributes
    const totalPriceElement = getByTestId("cake-price-value");
    const advancePriceElement = getByTestId("deposit-value");
    const validDiameterElement = getByTestId("cake-diameter-value");

    // Parse the textContent of elements to obtain calculated values
    const totalPrice = parseFloat(totalPriceElement.textContent || "0");
    const advancePrice = parseFloat(advancePriceElement.textContent || "0");
    const validDiameter = parseFloat(
      validDiameterElement.textContent?.replace("ø", "") || "0"
    );

    // Expected values for the changed cake values
    const expectedTotalPrice = 300;
    const expectedAdvancePrice = 75;
    const expectedValidDiameter = 21;

    // Assertions to compare the calculated values with expected values for changed cake values
    expect(totalPrice).toEqual(expectedTotalPrice);
    expect(advancePrice).toEqual(expectedAdvancePrice);
    expect(validDiameter).toEqual(expectedValidDiameter);
  });
});
