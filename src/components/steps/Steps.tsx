import React, { useState } from "react";
import { theme } from "../../styles/theme";
import Output from "../output/Output";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 330px;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

const StepHeader = styled.div`
  margin-bottom: 20px;
  font-size: ${theme.fontSize.base};
`;

const InputField = styled.input`
  width: 100%;
  max-width: 100px;
  height: 60px;
  padding: 10px;
  border: 1px solid #131212;
  text-align: center;
  border-radius: 40px;
  font-size: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const Slider = styled.input`
  width: 180px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SliderLabel = styled.label`
  margin-bottom: 10px;
  display: block;
  text-align: center;
`;

interface StepsProps {
  number: number;
  setCakeValues: (values: any) => void;
}

const Steps: React.FC<StepsProps> = ({ number, setCakeValues }) => {
  const [howManyPortions, setHowManyPortions] = useState(0);
  const [cakesHigh, setCakesHigh] = useState(0);
  const [pricePerOnePerson, setPricePerOnePerson] = useState(0);
  const [advance, setAdvance] = useState(50);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "portions-count":
        setHowManyPortions(Number(value));
        break;
      case "cakes-high":
        setCakesHigh(Number(value));
        break;
      case "price-per-portion":
        setPricePerOnePerson(Number(value));
        break;
      case "advance":
        // eslint-disable-next-line no-case-declarations
        const newValue = Number(value);
        if (newValue >= 1 && newValue <= 100) {
          setAdvance(newValue);
        }
        break;
      default:
        break;
    }

    setCakeValues({
      howManyPortions,
      cakesHigh,
      pricePerOnePerson,
      advance,
    });
  };

  let step;

  switch (number) {
    case 0:
      step = (
        <>
          <StepHeader>Na ile osób?</StepHeader>
          <InputField
            type="number"
            inputMode="numeric"
            id="portions-count"
            value={howManyPortions || 6}
            onChange={handleInputChange}
            min="6"
          />
        </>
      );
      break;
    case 1:
      step = (
        <>
          <StepHeader>Wysokość tortu w cm:</StepHeader>
          <InputField
            type="number"
            inputMode="numeric"
            id="cakes-high"
            value={cakesHigh || 7}
            onChange={handleInputChange}
            min="7"
          />
        </>
      );
      break;
    case 2:
      step = (
        <>
          <StepHeader>Ustal cenę za osobę:</StepHeader>
          <InputField
            type="number"
            inputMode="numeric"
            id="price-per-portion"
            value={pricePerOnePerson}
            onChange={handleInputChange}
          />
        </>
      );
      break;
    case 3:
      step = (
        <>
          <StepHeader>Ustal zaliczkę</StepHeader>
          <Slider
            type="range"
            min="1"
            max="100"
            value={advance}
            id="advance-slider"
            onChange={(e) => setAdvance(Number(e.target.value))}
          />
          <SliderLabel htmlFor="advance-slider">
            <span>{advance}</span>%
          </SliderLabel>
        </>
      );
      break;
    case 4:
      step = (
        <>
          <Output
            cakeValues={{
              howManyPortions,
              cakesHigh,
              pricePerOnePerson,
              advance,
            }}
          />
        </>
      );
  }

  return <StepContainer>{step}</StepContainer>;
};

export default Steps;
