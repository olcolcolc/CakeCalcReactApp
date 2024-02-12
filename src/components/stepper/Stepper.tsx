import { useEffect, useState } from "react";
import Circle from "../circle/Circle";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Button from "../button/Button";
import Steps from "../steps/Steps";

const StepperContainer = styled.div`
  display: flex;
  margin: 0 0 150px 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  width: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  align-items: center;
  width: 46rem;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${({ theme }) =>
    theme.mixin.forMaxWidth450(`
      display: none;
    `)}

  &::before {
    background: ${theme.colors.black};
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 5px;
    width: 100%;
    height: 1px;
    z-index: 0;
    transition: 0.4s ease;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  ${({ theme }) =>
    theme.mixin.forMaxWidth450(`
      width: 300px;
    `)}
`;

const Stepper = () => {
  const [circle] = useState(5); // Total number of steps
  const [active, setActive] = useState(0); // Current active step
  const [width, setWidth] = useState(0);
  const [disableNextButton, setDisableNextButton] = useState(false);

  // Function to update values in the Stepper component
  const setCakeValues = (values: number) => {
    console.log("Updated cake values:", values);
  };

  // Update progress bar width based on active step
  useEffect(() => {
    setWidth((100 / (circle - 1)) * active);
    console.log(width);
  }, [circle, active]);

  // Create an array of step circles based on total steps and active step
  const arr = [];
  for (let i = 0; i < circle; i++) {
    arr.push(
      <Circle classname={i <= active ? "active" : ""} key={i}>
        {i}
      </Circle>
    );
  }

  return (
    <StepperContainer>
      <Content>
        {/* Progress bar visualizing steps */}
        <ProgressBar data-testid="progress-bar">{arr}</ProgressBar>
        {/* Render step-specific content */}
        <Steps
          stepNumber={active}
          setCakeValues={setCakeValues}
          setDisableNextButton={setDisableNextButton}
        />
      </Content>
      {/* Navigation buttons */}
      <ButtonsContainer data-testid="buttons-container">
        <Button
          name="previous"
          data-testid="previous-button"
          disabled={active <= 0}
          onClick={() => {
            if (active <= 0) {
              setActive(0);
            } else setActive(active - 1);
          }}
        />
        <Button
          name="next"
          data-testid="next-button"
          disabled={active >= circle - 1 || disableNextButton}
          onClick={() => {
            if (active >= circle - 1) {
              setActive(circle - 1);
            } else setActive(active + 1);
          }}
        />
      </ButtonsContainer>
    </StepperContainer>
  );
};

export default Stepper;
