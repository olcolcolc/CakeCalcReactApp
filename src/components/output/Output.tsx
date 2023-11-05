import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

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
    portionsCount: number;
    cakesHigh: number;
    pricePerPortion: number;
    otherPrice: number;
  };
}

const Output: React.FC<OutputProps> = ({ cakeValues }) => {
  return (
    <>
      <OutputHeader>Twoje dane:</OutputHeader>

      <OutputContainer>
        <Sides>
          <p>Na ile osób: {cakeValues.portionsCount}</p>
          <p>Wysokość tortu: {cakeValues.cakesHigh}</p>
        </Sides>
        <Sides>
          <p>Cena za osobę: {cakeValues.pricePerPortion}</p>
          <p>Dodatkowe koszty: {cakeValues.otherPrice}</p>
        </Sides>
      </OutputContainer>
    </>
  );
};

export default Output;
