import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { Cake } from "../../classes/Cake";

const OutputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

const OutputHeader = styled.div`
  font-size: ${theme.fontSize.base};
  margin-top: -20px;
  margin-bottom: 20px;
`;

const Elements = styled.div`
  text-align: center;
`;

const blinkAnimation = `
  @keyframes blink {
    0% { color: red; }
    25% { color: blue; }
    50% { color: green; }
    75% { color: orange; }
    100% { color: red; }
  }
`;

const Values = styled.div`
  animation: ${blinkAnimation} 2s infinite;
`;

interface OutputProps {
  cakeValues: {
    howManyPortions: number;
    cakesHigh: number;
    pricePerOnePerson: number;
    otherPrice: number;
  };
}

const Output: React.FC<OutputProps> = ({ cakeValues }) => {
  const { howManyPortions, cakesHigh, pricePerOnePerson, otherPrice } =
    cakeValues;

  const cake = new Cake({
    portionsCount: howManyPortions,
    height: cakesHigh,
    pricePerPerson: pricePerOnePerson,
    extras: otherPrice,
  });

  const diameter = cake.calculateDiameter();
  const totalPrice = cake.priceCalc();

  return (
    <>
      <OutputHeader>twój tort</OutputHeader>

      <OutputContainer>
        <Elements>
          <p>cena tortu:</p>
          <Values>{totalPrice} zł</Values>
        </Elements>
        <Elements>
          <p>średnica tortu:</p>
          <Values> {diameter}</Values>
        </Elements>
      </OutputContainer>
    </>
  );
};

export default Output;
