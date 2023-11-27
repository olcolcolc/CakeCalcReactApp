import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Output from "../output/Output";

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
`;

interface StepsProps {
  number: number;
  setCakeValues: (values: any) => void;
}

const Steps: React.FC<StepsProps> = ({ number, setCakeValues }) => {
  const [portionsCount, setPortionsCount] = useState(0);
  const [cakesHigh, setCakesHigh] = useState(0);
  const [pricePerPortion, setPricePerPortion] = useState(0);
  const [otherPrice, setOtherPrice] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "portions-count":
        setPortionsCount(Number(value));
        break;
      case "cakes-high":
        setCakesHigh(Number(value));
        break;
      case "price-per-portion":
        setPricePerPortion(Number(value));
        break;
      case "other-price":
        setOtherPrice(Number(value));
        break;
      default:
        break;
    }

    setCakeValues({
      portionsCount,
      cakesHigh,
      pricePerPortion,
      otherPrice,
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
            id="portions-count"
            value={portionsCount}
            onChange={handleInputChange}
          />
        </>
      );
      break;
    case 1:
      step = (
        <>
          <StepHeader>Wysokosc tortu:</StepHeader>
          <InputField
            type="number"
            id="cakes-high"
            value={cakesHigh}
            onChange={handleInputChange}
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
            id="price-per-portion"
            value={pricePerPortion}
            onChange={handleInputChange}
          />
        </>
      );
      break;
    case 3:
      step = (
        <>
          <StepHeader>Dodatkowe koszty:</StepHeader>
          <InputField
            type="number"
            id="other-price"
            value={otherPrice}
            onChange={handleInputChange}
          />
        </>
      );
      break;
    case 4:
      step = (
        <>
          <Output
            cakeValues={{
              portionsCount,
              cakesHigh,
              pricePerPortion,
              otherPrice,
            }}
          />
        </>
      );
  }

  return <StepContainer>{step}</StepContainer>;
};

export default Steps;
