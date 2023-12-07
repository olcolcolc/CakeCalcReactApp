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
  animation: ${rotateHue} 3s linear infinite;
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
          <Values>{totalPrice}$</Values>
        </Elements>
        <Elements>
          <p>średnica tortu:</p>
          <Values> {diameter}ø</Values>
        </Elements>
      </OutputContainer>
    </>
  );
};

export default Output;
