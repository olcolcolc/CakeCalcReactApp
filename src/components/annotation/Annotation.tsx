import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { theme } from "../../styles/theme";

type AnnotationProps = {
  step: "0" | "1";
};

const AnnotationDiv = styled.div`
  position: absolute;
  top: 375px;
  font-size: ${theme.fontSize.annotation_mobile};
  text-align: center;
  font-family: "Regular_BasisGrotesqueArabicPro";
  padding: 0 10px;
  ${theme.mixin.forMinWidth650(`
    top: 460px;
    font-size: ${theme.fontSize.annotation_desktop};
`)}
`;

const Annotation: React.FC<AnnotationProps> = ({ step }) => {
  const { t } = useTranslation();

  return (
    <AnnotationDiv>
      {step === "0" ? (
        <span data-testid="annotation-step0">{t("annotation.step0")}</span>
      ) : (
        <span data-testid="annotation-step1">{t("annotation.step1")}</span>
      )}
    </AnnotationDiv>
  );
};

export default Annotation;
