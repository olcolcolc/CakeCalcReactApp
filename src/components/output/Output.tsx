import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Cake } from "../../objects/Cake";
import { useTranslation } from "react-i18next";

const OutputContainer = styled.div`
  margin-top: 50px;
`;

const ValuesContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  font-size: ${theme.fontSize.base};
  font-family: "Medium_BasisGrotesqueArabicPro";
  ${theme.mixin.forMinWidth450(`
    flex-direction: row;
`)}
  ${theme.mixin.forMinWidth650(`
    margin: 0 auto;
`)}
`;

const OutputHeader = styled.div`
  font-size: ${theme.fontSize.stepHeader_mobile};
  color: ${theme.colors.white};
  font-family: "OggRoman";
  text-align: center;
  ${theme.mixin.forMinWidth650(`
    font-size: ${theme.fontSize.stepHeader_desktop};
    margin-bottom: 30px;
`)}
`;

const Element = styled.div`
  text-align: center;
  margin: -12px;
`;

const ElementHeader = styled.div`
  margin: 10px;
`;

const Values = styled.p`
  font-size: ${theme.fontSize.outputValues_mobile};
  font-family: "OggRoman";
  padding-bottom: 1px;
  color: ${theme.colors.white};
  -webkit-background-clip: text;
  background-clip: text;
  margin: 10px 50px;
  ${theme.mixin.forMinWidth450(`
    padding-bottom: 12px;
`)}
  ${theme.mixin.forMinWidth650(`
    font-size: 50px;
`)}
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
    <OutputContainer>
      <OutputHeader data-testid="output-header">
        {t("output.header")}
      </OutputHeader>

      <ValuesContainer data-testid="output-container">
        <Element data-testid="cake-price-element">
          <ElementHeader>{t("output.cakePrice")}</ElementHeader>
          <Values data-testid="cake-price-value">
            {totalPrice}
            {t("currency")}
          </Values>
        </Element>
        <Element data-testid="deposit-element">
          <ElementHeader>{t("output.deposit")}</ElementHeader>
          <Values data-testid="deposit-value">
            {advancePrice}
            {t("currency")}
          </Values>
        </Element>
        <Element data-testid="cake-diameter-element">
          <ElementHeader>{t("output.cakeDiameter")}</ElementHeader>
          <Values data-testid="cake-diameter-value">{validDiameter}ø</Values>
        </Element>
      </ValuesContainer>
    </OutputContainer>
  );
};

export default Output;
