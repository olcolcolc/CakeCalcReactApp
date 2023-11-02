import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
`;

const StepHeader = styled.div`
  font-size: ${theme.fontSize.base};
`;

const InputField = styled.input`
  width: 100%;
  max-width: 100px;
  height: 60px;
  padding: 10px;
  border: 1px solid #131212;
  text-align: center;
  border-radius: 5px;
  font-size: 36px;
  margin: 5px 0;
`;

interface StepsProps {
  number: number;
}

const Steps: React.FC<StepsProps> = ({ number }) => {
  let step;

  switch (number) {
    case 0:
      step = (
        <>
          <StepHeader>Na ile osób?</StepHeader>
          <InputField type="number" id="portions-count" />
        </>
      );
      break;
    case 1:
      step = (
        <>
          <StepHeader>Wysokosc tortu:</StepHeader>
          <InputField type="number" id="cakes-high" />
        </>
      );
      break;
    case 2:
      step = (
        <>
          <StepHeader>Ustal cenę za osobę:</StepHeader>
          <InputField type="number" id="price-per-portion" />
        </>
      );
      break;
    case 3:
      step = (
        <>
          <StepHeader>Dodatkowe koszty:</StepHeader>
          <InputField type="number" id="other-price" />
        </>
      );
      break;
  }

  return <StepContainer>{step}</StepContainer>;
};

export default Steps;
