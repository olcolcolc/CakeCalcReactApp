import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { Cake } from "../../objects/Cake";

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

//Gradient Animation for Values div's
const gradientAnimation = keyframes`
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
  animation: ${gradientAnimation} 3s linear infinite;
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
  // Destructure values from cakeValues
  const { howManyPortions, cakesHigh, pricePerOnePerson, advance } = cakeValues;

  // Create a Cake object based on the provided values
  const cake = new Cake({
    portionsCount: howManyPortions,
    height: cakesHigh,
    pricePerPerson: pricePerOnePerson,
    advance: advance,
  });

  // Calculate diameter, total price, and advance price values
  const diameter = cake.calculateDiameter();
  const totalPrice = parseFloat(cake.priceCalc().toFixed(2));
  const advancePrice = ((totalPrice * advance) / 100).toFixed(2);
  const validDiameter = isNaN(diameter) ? 0 : diameter;

  return (
    <>
      <OutputHeader>Twój tort</OutputHeader>

      <OutputContainer>
        <Elements>
          <p>Cena tortu:</p>
          <Values>{totalPrice}$</Values>
        </Elements>
        <Elements>
          <p>Zaliczka:</p>
          <Values>{advancePrice}$</Values>
        </Elements>
        <Elements>
          <p>Średnica tortu:</p>
          <Values>{validDiameter}ø</Values>
        </Elements>
      </OutputContainer>
    </>
  );
};

export default Output;
