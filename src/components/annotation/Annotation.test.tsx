import { render, screen } from "@testing-library/react";
import Annotation from "./Annotation";

test("renders correct annotation text for step 0", () => {
  render(<Annotation step="0" />);
  const annotationStep0 = screen.getByTestId("annotation-step0");
  expect(annotationStep0).toBeInTheDocument();
});

test("renders correct annotation text for step 1", () => {
  render(<Annotation step="1" />);
  const annotationStep1 = screen.getByTestId("annotation-step1");
  expect(annotationStep1).toBeInTheDocument();
});
