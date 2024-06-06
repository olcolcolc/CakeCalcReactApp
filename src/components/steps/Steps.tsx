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
  height: 22.5rem;
`;

const StepHeader = styled.p`
  position: absolute;
  top: 8.25rem;
  line-height: 3.5rem;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  height: 7rem;
  font-size: ${theme.fontSize.stepHeader_mobile};
  text-align: center;
  font-family: "OggRoman";
  flex-direction: column;
  ${theme.mixin.forMinWidth650(`
    flex-direction: row;
    top: 12rem;
    max-width: 31rem;
    font-size: ${theme.fontSize.stepHeader_desktop};
  `)}
`;

const InputField = styled.input`
  position: absolute;
  top: 18rem;
  max-width: 10rem;
  margin: 0.6rem;
  height: 2rem;
  padding: 0.5rem 2.5rem;
  background-color: inherit;
  border: 1px solid ${theme.colors.black};
  font-family: "Medium_BasisGrotesqueArabicPro";
  text-align: center;
  border-radius: 3rem;
  font-size: 1.6rem;
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
    top: 24rem;
    max-width: 15.5rem;
  `)}
`;

const SliderContainer = styled.div`
  position: absolute;
  top: 19rem;
  cursor: pointer;
  ${theme.mixin.forMinWidth650(`
    top: 24.5rem;
  `)}
`;

const SliderLabel = styled.p`
  position: absolute;
  top: 22.5rem;
  font-size: ${theme.fontSize.base};
  font-family: "Medium_BasisGrotesqueArabicPro";
  position: absolute;
  ${theme.mixin.forMinWidth650(`
    top: 28rem;
  `)}
`;

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
  const [howManyPortions, setHowManyPortions] = useState("6");
  const [cakesHigh, setCakesHigh] = useState("7");
  const [pricePerOnePerson, setPricePerOnePerson] = useState("0");
  const [advance, setAdvance] = useState("0");

  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const disableButton = (minValue: number) =>
      setDisableNextButton(parseInt(value, 10) < minValue);

    switch (id) {
      case "portions-count":
        setHowManyPortions(value);
        disableButton(6);
        break;
      case "cakes-high":
        setCakesHigh(value);
        disableButton(7);
        break;
      case "price-per-portion":
        setPricePerOnePerson(value);
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

  const steps = [
    {
      header: t("steps.0"),
      value: howManyPortions,
      id: "portions-count",
      annotation: <Annotation step="0" />,
    },
    {
      header: t("steps.1"),
      value: cakesHigh,
      id: "cakes-high",
      annotation: <Annotation step="1" />,
    },
    {
      header: t("steps.2"),
      value: pricePerOnePerson,
      id: "price-per-portion",
    },
    {
      header: t("steps.3"),
      component: (
        <>
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
          <SliderLabel data-testid="step3-slider-label">{advance}%</SliderLabel>
        </>
      ),
    },
    {
      // This is the final step where we display the output
      component: (
        <div data-testid="step-4-output">
          {/* The Output component is responsible for displaying the final result */}
          <Output
            cakeValues={{
              howManyPortions,
              cakesHigh,
              pricePerOnePerson,
              advance,
            }}
          />
        </div>
      ),
    },
  ];

  // We get the current step based on the stepNumber,
  // or an empty object if the stepNumber is out of range
  const step = steps[stepNumber] || {};

  return (
    <StepContainer>
      {/* If the current step has a header, we display it */}
      {step.header && (
        <StepHeader data-testid={`step-${stepNumber}-header`}>
          {step.header}
        </StepHeader>
      )}
      {step.value && (
        <InputField
          type="number"
          inputMode="numeric"
          value={step.value}
          onChange={handleInputChange}
          id={step.id}
          data-testid={`step-${stepNumber}-input`}
        />
      )}
      {/* If the current step has an annotation, we display it */}
      {step.annotation}
      {/* If the current step has a component, we display it */}
      {step.component}
    </StepContainer>
  );
};

export default Steps;
