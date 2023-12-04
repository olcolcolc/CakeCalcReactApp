import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { Cake } from "../../classes/Cake";

const OutputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`;

const OutputHeader = styled.div`
  font-size: ${theme.fontSize.base};
`;

const Sides = styled.div`
  flex-direction: column;
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
      <OutputHeader>Twoje dane:</OutputHeader>

      <OutputContainer>
        <Sides>
          <p>Na ile osób: {howManyPortions}</p>
          <p>Wysokość tortu: {cakesHigh}</p>
        </Sides>
        <Sides>
          <p>Cena tortu: {totalPrice}</p>
          <p>Dodatkowe koszty: {otherPrice}</p>
          <p>Średnica tortu: {diameter}</p>
        </Sides>
      </OutputContainer>
    </>
  );
};

export default Output;
