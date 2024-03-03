import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { theme } from "../../styles/theme";

type AnnotationProps = {
  step: "0" | "1";
};

const AnnotationDiv = styled.p`
  position: absolute;
  top: 355px;
  font-size: ${theme.fontSize.annotation_mobile};
  text-align: center;
  font-family: "Medium_BasisGrotesqueArabicPro";
  padding: 0 10px;
  ${theme.mixin.forMinWidth650(`
    top: 430px;
    font-size: ${theme.fontSize.annotation_desktop};
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
