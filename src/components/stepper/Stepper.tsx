import { useEffect, useState } from "react";
import Circle from "../circle/Circle";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Button from "../button/Button";
import Steps from "../steps/Steps";

const StepperContainer = styled.div`
  display: flex;
  margin: 0 0 9rem 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  align-items: center;
  width: 40rem;
`;

const ProgressBar = styled.div`
  display: none;
  justify-content: space-between;
  margin-top: -1.5rem;
  align-items: center;
  position: relative;
  ${theme.mixin.forMinWidth650(`
    display: flex;
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
  position: absolute;
  top: 27.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  ${theme.mixin.forMinWidth650(`
    top: 34rem;
    width: 37rem;
`)}
`;

interface StepperProps {
  isLastStep: boolean;
  setIsLastStep: (isLastStep: boolean) => void;
}

const Stepper: React.FC<StepperProps> = ({ isLastStep, setIsLastStep }) => {
  const totalSteps = 5; // Total number of steps
  const [active, setActive] = useState(0); // Current active step
  const [width, setWidth] = useState(0);
  const [disableNextButton, setDisableNextButton] = useState(false);

  // Function to update values in the Stepper component
  const setCakeValues = (values: number) => {
    console.log("Updated cake values:", values);
  };

  // Update progress bar width based on active step
  useEffect(() => {
    setWidth((100 / (totalSteps - 1)) * active);
    setIsLastStep(active === totalSteps - 1);
    console.log(width, isLastStep);
  }, [totalSteps, active, setIsLastStep, width, isLastStep]);

  // Create an array of step circles based on total steps and active step
  const steps = Array.from({ length: totalSteps }, (_, i) => (
    <Circle isActive={i === active} key={i}>
      {i}
    </Circle>
  ));

  return (
    <StepperContainer>
      <Content>
        {/* Progress bar visualizing steps */}
        <ProgressBar data-testid="progress-bar">{steps}</ProgressBar>
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
          type="previous"
          data-testid="previous-button"
          disabled={active <= 0}
          onClick={() => setActive((prevActive) => Math.max(0, prevActive - 1))}
        />
        <Button
          type="next"
          data-testid="next-button"
          disabled={active >= totalSteps - 1 || disableNextButton}
          onClick={() =>
            setActive((prevActive) => Math.min(totalSteps - 1, prevActive + 1))
          }
        />
      </ButtonsContainer>
    </StepperContainer>
  );
};

export default Stepper;
