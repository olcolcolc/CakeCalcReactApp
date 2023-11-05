import React, { useState } from "react";
import styled from "@emotion/styled";
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
  setCakeValues: (values: any) => void; // Funkcja do aktualizacji wartości w komponencie nadrzędnym
}

const Steps: React.FC<StepsProps> = ({ number, setCakeValues }) => {
  // Użyj stanu, aby śledzić wartości wprowadzone w polach
  const [portionsCount, setPortionsCount] = useState(0);
  const [cakesHigh, setCakesHigh] = useState(0);
  const [pricePerPortion, setPricePerPortion] = useState(0);
  const [otherPrice, setOtherPrice] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Aktualizuj stan w zależności od zmian w polach
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

    // Aktualizuj wartości w komponencie nadrzędnym
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
  }

  return <StepContainer>{step}</StepContainer>;
};

export default Steps;
