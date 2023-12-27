import { render } from "@testing-library/react";
import Steps from "./Steps";

describe("Steps component", () => {
  it("renders 0 step correctly", () => {
    const { getByTestId } = render(
      <Steps
        stepNumber={0}
        setCakeValues={(values) => {
          values.howManyPortions = "6";
          values.cakesHigh = "7";
          values.pricePerOnePerson = "0";
          values.advance = "50";
        }}
        setDisableNextButton={() => {
          true;
        }}
      />
    );
    const inputField = getByTestId("step-0-input") as HTMLInputElement;
    const stepHeader = getByTestId("step-0-header");

    expect(stepHeader).toHaveTextContent("steps.0");
    expect(stepHeader).not.toHaveTextContent("steps.1");
    expect(inputField.value).toBe("6");
    expect(inputField.value).not.toBe("5");
  });

  it("renders 1 step correctly", () => {
    const { getByTestId } = render(
      <Steps
        stepNumber={1}
        setCakeValues={(values) => {
          values.howManyPortions = "6";
          values.cakesHigh = "7";
          values.pricePerOnePerson = "0";
          values.advance = "50";
        }}
        setDisableNextButton={() => {
          true;
        }}
      />
    );
    const inputField = getByTestId("step-1-input") as HTMLInputElement;
    const stepHeader = getByTestId("step-1-header");

    expect(stepHeader).toHaveTextContent("steps.1");
    expect(stepHeader).not.toHaveTextContent("steps.0");
    expect(inputField.value).toBe("7");
    expect(inputField.value).not.toBe("6");
  });
  it("renders 2 step correctly", () => {
    const { getByTestId } = render(
      <Steps
        stepNumber={2}
        setCakeValues={(values) => {
          values.howManyPortions = "6";
          values.cakesHigh = "7";
          values.pricePerOnePerson = "0";
          values.advance = "50";
        }}
        setDisableNextButton={() => {
          true;
        }}
      />
    );
    const inputField = getByTestId("step-2-input") as HTMLInputElement;
    const stepHeader = getByTestId("step-2-header");

    expect(stepHeader).toHaveTextContent("steps.2");
    expect(stepHeader).not.toHaveTextContent("steps.1");
    expect(inputField.value).toBe("0");
    expect(inputField.value).not.toBe("1");
  });
  it("renders 3 step correctly", () => {
    const { getByTestId } = render(
      <Steps
        stepNumber={3}
        setCakeValues={(values) => {
          values.howManyPortions = "6";
          values.cakesHigh = "7";
          values.pricePerOnePerson = "0";
          values.advance = "50";
        }}
        setDisableNextButton={() => {
          true;
        }}
      />
    );
    const inputField = getByTestId("step-3-slider") as HTMLInputElement;
    const stepHeader = getByTestId("step-3-header");

    expect(stepHeader).toHaveTextContent("steps.3");
    expect(stepHeader).not.toHaveTextContent("steps.2");
    expect(inputField.value).toBe("50");
    expect(inputField.value).not.toBe("30");
  });
  it("renders 4 step correctly", () => {
    const { getByTestId } = render(
      <Steps
        stepNumber={4}
        setCakeValues={(values) => {
          values.howManyPortions = "6";
          values.cakesHigh = "7";
          values.pricePerOnePerson = "0";
          values.advance = "50";
        }}
        setDisableNextButton={() => {
          false;
        }}
      />
    );

    const output = getByTestId("step-4-output");

    expect(output).toBeVisible;
  });
});
