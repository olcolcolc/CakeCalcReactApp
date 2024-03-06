import React, { useState } from "react";
import { theme } from "../../styles/theme";
import Output from "../output/Output";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Annotation from "../annotation/Annotation";
import CircularSlider from "@fseehawer/react-circular-slider";

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 360px;
`;

const StepHeader = styled.p`
  position: absolute;
  top: 80px;
  line-height: 55px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 200px;
  max-width: 500px;
  font-size: ${theme.fontSize.stepHeader_mobile};
  text-align: center;
  font-family: "OggRoman";
  ${theme.mixin.forMinWidth650(`
    top: 160px;
    font-size: ${theme.fontSize.stepHeader_desktop};
`)}
`;

const InputField = styled.input`
  position: absolute;
  top: 300px;
  max-width: 160px;
  margin: 10px;
  height: 33px;
  padding: 8px 40px;
  background-color: inherit;
  border: 1px solid ${theme.colors.black};
  font-family: "Medium_BasisGrotesqueArabicPro";
  text-align: center;
  border-radius: 50px;
  font-size: 26px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: solid 2px ${theme.colors.black};
  }
  /* Hide arrows for input */
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
  ${theme.mixin.forMinWidth650(`
    top: 385px;
    max-width: 250px;
`)}
`;

const SliderContainer = styled.div`
  position: absolute;
  top: 300px;
  cursor: pointer;
  ${theme.mixin.forMinWidth650(`
    top: 395px;
`)}
`;

const SliderLabel = styled.p`
  position: absolute;
  top: 360px;
  font-size: ${theme.fontSize.base};
  font-family: "Medium_BasisGrotesqueArabicPro";
  position: absolute;
  ${theme.mixin.forMinWidth650(`
    top: 450px;
`)}
`;

// CircularSlider is styled inside component

interface StepsProps {
  stepNumber: number;
  setCakeValues: (values: any) => void;
  setDisableNextButton: (isDisabled: boolean) => void;
}

const Steps: React.FC<StepsProps> = ({
  stepNumber,
  setCakeValues,
  setDisableNextButton,
}) => {
  // These values are strings so that the entire input can be deleted.
  const [howManyPortions, setHowManyPortions] = useState("6");
  const [cakesHigh, setCakesHigh] = useState("7");
  const [pricePerOnePerson, setPricePerOnePerson] = useState("0");
  const [advance, setAdvance] = useState("0");

  // Get the translation function 't' and the i18n instance from the useTranslation hook
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "portions-count":
        setHowManyPortions(value);
        // Disable button when the user enters less than 6 in the input.
        setDisableNextButton(parseInt(value, 10) < 6);
        break;
      case "cakes-high":
        setCakesHigh(value);
        // Disable button when the user enters less than 7 in the input.
        setDisableNextButton(parseInt(value, 10) < 7);
        break;
      case "price-per-portion":
        setPricePerOnePerson(value);
        break;
      // case "advance":
      // In CircularSlider, it is impossible to assign an id to the component,
      // so the handleChange function is written directly in the onchange attribute
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
          <StepHeader data-testid="step-0-header">{t("steps.0")}</StepHeader>
          <InputField
            type="number"
            inputMode="numeric"
            value={howManyPortions}
            onChange={handleInputChange}
            id="portions-count"
            data-testid="step-0-input"
          />
          <Annotation step="0" />
        </>
      );
      break;
    case 1:
      step = (
        <>
          <StepHeader data-testid="step-1-header">{t("steps.1")}</StepHeader>
          <InputField
            type="number"
            inputMode="numeric"
            value={cakesHigh}
            onChange={handleInputChange}
            id="cakes-high"
            data-testid="step-1w-input"
          />
          <Annotation step="1" />
        </>
      );
      break;
    case 2:
      step = (
        <>
          <StepHeader data-testid="step-2-header">{t("steps.2")}</StepHeader>
          <InputField
            type="number"
            value={pricePerOnePerson}
            onChange={handleInputChange}
            id="price-per-portion"
            data-testid="step-2-input"
          />
        </>
      );
      break;
    case 3:
      step = (
        <>
          <StepHeader data-testid="step-3-header">{t("steps.3")}</StepHeader>
          <SliderContainer>
            <CircularSlider
              width={50}
              hideKnob={true}
              min={0}
              max={100}
              direction={-1}
              progressColorFrom="#F88B9E"
              progressColorTo="#F88B9E"
              trackColor="black"
              data-testid="step-3-slider"
              labelColor="#F9D644"
              label=" "
              onChange={(value: number) => {
                setAdvance(value.toString());
              }}
              progressSize={5}
              trackSize={5}
              trackDraggable={true}
            ></CircularSlider>
          </SliderContainer>
          <SliderLabel>{advance}%</SliderLabel>
        </>
      );
      break;
    case 4:
      step = (
        <div data-testid="step-4-output">
          <Output
            cakeValues={{
              howManyPortions,
              cakesHigh,
              pricePerOnePerson,
              advance,
            }}
          />
        </div>
      );
      break;
    default:
      break;
  }

  return <StepContainer>{step}</StepContainer>;
};

export default Steps;
