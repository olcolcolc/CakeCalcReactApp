import React, { useState } from "react";
import { theme } from "../../styles/theme";
import Output from "../output/Output";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Annotation from "../../annotation/Annotation";

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 330px;
`;

const StepHeader = styled.div`
  margin-bottom: 20px;
  font-size: ${theme.fontSize.base};
  &::first-letter {
    text-transform: uppercase;
  }
`;

const InputField = styled.input`
  width: 100%;
  max-width: 100px;
  height: 60px;
  padding: 10px;
  border: 1px solid ${theme.colors.input};
  text-align: center;
  border-radius: 40px;
  font-size: 50px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: solid 2px ${theme.colors.input};
  }
`;

const Slider = styled.input`
  width: 180px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SliderLabel = styled.label`
  width: 180px;
  margin-bottom: 20px;
  text-align: center;
`;

interface StepsProps {
  stepNumber: number;
  setCakeValues: (values: any) => void;
}

const Steps: React.FC<StepsProps> = ({ stepNumber, setCakeValues }) => {
  // These values are strings so that the entire input can be deleted.
  const [howManyPortions, setHowManyPortions] = useState("6");
  const [cakesHigh, setCakesHigh] = useState("7");
  const [pricePerOnePerson, setPricePerOnePerson] = useState("0");
  const [advance, setAdvance] = useState("50");

  // Get the translation function 't' and the i18n instance from the useTranslation hook
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "portions-count":
        setHowManyPortions(value);
        break;
      case "cakes-high":
        setCakesHigh(value);
        break;
      case "price-per-portion":
        setPricePerOnePerson(value);
        break;
      case "advance":
        // eslint-disable-next-line no-case-declarations
        const newValue = Number(value);
        if (!isNaN(newValue) && newValue >= 1 && newValue <= 100) {
          setAdvance(value);
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

  // Logic to render different steps based on the 'number' prop
  let step;
  switch (stepNumber) {
    case 0:
      step = (
        <>
          <StepHeader>{t("steps.0")}</StepHeader>
          <InputField
            type="number"
            inputMode="numeric"
            value={howManyPortions}
            onChange={handleInputChange}
            id="portions-count"
          />
          <Annotation step="0" />
        </>
      );
      break;
    case 1:
      step = (
        <>
          <StepHeader>{t("steps.1")}</StepHeader>
          <InputField
            type="number"
            inputMode="numeric"
            value={cakesHigh}
            onChange={handleInputChange}
            id="cakes-high"
          />
          <Annotation step="1" />
        </>
      );
      break;
    case 2:
      step = (
        <>
          <StepHeader>{t("steps.2")}</StepHeader>
          <InputField
            type="number"
            value={pricePerOnePerson}
            onChange={handleInputChange}
            id="price-per-portion"
          />
        </>
      );
      break;
    case 3:
      step = (
        <>
          <StepHeader>{t("steps.3")}</StepHeader>
          <Slider
            type="range"
            min="1"
            max="100"
            value={advance}
            onChange={handleInputChange}
            id="advance"
          />
          <SliderLabel htmlFor="advance">
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
