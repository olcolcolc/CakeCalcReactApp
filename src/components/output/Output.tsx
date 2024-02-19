import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { Cake } from "../../objects/Cake";
import { useTranslation } from "react-i18next";

const OutputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

const OutputHeader = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Elements = styled.div`
  text-align: center;
  margin: -12px;
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
  padding-bottom: 12px;
  background-image: linear-gradient(62deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-top: -20px;
  animation: ${gradientAnimation} 3s linear infinite;
`;

interface OutputProps {
  cakeValues: {
    howManyPortions: string;
    cakesHigh: string;
    pricePerOnePerson: string;
    advance: string;
  };
}

const Output: React.FC<OutputProps> = ({ cakeValues }) => {
  // Destructure values from cakeValues
  const { howManyPortions, cakesHigh, pricePerOnePerson, advance } = cakeValues;

  // Create a Cake object based on the provided values after converting them to numeric types.
  const cake = new Cake({
    portionsCount: parseInt(howManyPortions, 10),
    height: parseInt(cakesHigh, 10),
    pricePerPerson: parseFloat(pricePerOnePerson),
    advance: parseFloat(advance),
  });

  // Calculate diameter, total price, and advance price values
  const diameter = cake.calculateDiameter();
  const totalPrice = parseFloat(cake.priceCalc().toFixed(2));
  const advanceValue = parseFloat(advance); // Parsing advance again as a number
  const advancePrice = ((totalPrice * advanceValue) / 100).toFixed(2);
  const validDiameter = isNaN(diameter) ? 0 : diameter;

  // Get the translation function 't' and the i18n instance from the useTranslation hook
  const { t } = useTranslation();

  return (
    <>
      <OutputHeader data-testid="output-header">
        {t("output.header")}
      </OutputHeader>

      <OutputContainer data-testid="output-container">
        <Elements data-testid="cake-price-element">
          <p>{t("output.cakePrice")}</p>
          <Values data-testid="cake-price-value">
            {totalPrice}
            {t("currency")}
          </Values>
        </Elements>
        <Elements data-testid="deposit-element">
          <p>{t("output.deposit")}</p>
          <Values data-testid="deposit-value">
            {advancePrice}
            {t("currency")}
          </Values>
        </Elements>
        <Elements data-testid="cake-diameter-element">
          <p>{t("output.cakeDiameter")}</p>
          <Values data-testid="cake-diameter-value">{validDiameter}ø</Values>
        </Elements>
      </OutputContainer>
    </>
  );
};

export default Output;
