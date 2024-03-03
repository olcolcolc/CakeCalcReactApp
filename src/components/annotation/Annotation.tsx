import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { theme } from "../../styles/theme";

type AnnotationProps = {
  step: "0" | "1";
};

const AnnotationDiv = styled.p`
  position: absolute;
  top: 340px;
  text-align: center;
  font-size: ${theme.fontSize.base};
  font-family: "Medium_BasisGrotesqueArabicPro";
  &::first-letter {
    text-transform: uppercase;
  }
  ${theme.mixin.forMinWidth650(`
    top: 430px;
`)}
`;

const Annotation: React.FC<AnnotationProps> = ({ step }) => {
  const { t } = useTranslation();

  return (
    <AnnotationDiv>
      {step === "0" ? (
        <p data-testid="annotation-step0">{t("annotation.step0")}</p>
      ) : (
        <p data-testid="annotation-step1">{t("annotation.step1")}</p>
      )}
    </AnnotationDiv>
  );
};

export default Annotation;
