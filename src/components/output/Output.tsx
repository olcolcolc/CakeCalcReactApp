import React from "react";
import styled, { keyframes } from "styled-components";
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

const rotateHue = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

const Values = styled.div`
  font-size: 50px;
  font-weight: bold;
  background-image: linear-gradient(62deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-top: -20px;
  animation: ${rotateHue} 3s linear infinite;
`;

interface OutputProps {
  cakeValues: {
    howManyPortions: number;
    cakesHigh: number;
    pricePerOnePerson: number;
    advance: number;
  };
}

const Output: React.FC<OutputProps> = ({ cakeValues }) => {
  const { howManyPortions, cakesHigh, pricePerOnePerson, advance } = cakeValues;

  const cake = new Cake({
    portionsCount: howManyPortions,
    height: cakesHigh,
    pricePerPerson: pricePerOnePerson,
    advance: advance,
  });

  const diameter = cake.calculateDiameter();
  const totalPrice = cake.priceCalc();
  const advancePrice = ((totalPrice * advance) / 100).toFixed(2);
  // Warunek sprawdzający, czy średnica jest NaN lub niezdefiniowana
  const validDiameter =
    isNaN(diameter) || typeof diameter !== "number" ? 0 : diameter;

  return (
    <>
      <OutputHeader>twój tort</OutputHeader>

      <OutputContainer>
        <Elements>
          <p>cena tortu:</p>
          <Values>{totalPrice}$</Values>
        </Elements>
        <Elements>
          <p>zaliczka:</p>
          <Values> {advancePrice}$</Values>
        </Elements>
        <Elements>
          <p>średnica tortu:</p>
          <Values> {validDiameter}ø</Values>
        </Elements>
      </OutputContainer>
    </>
  );
};

export default Output;
