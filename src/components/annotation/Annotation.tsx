import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { theme } from "../../styles/theme";

// Define the type for the Annotation component props
type AnnotationProps = {
  step: "0" | "1";
};

// Styled component for the annotation div
const AnnotationDiv = styled.div`
  position: absolute;
  top: 23.5rem;
  font-size: ${theme.fontSize.annotation_mobile};
  text-align: center;
  font-family: "Regular_BasisGrotesqueArabicPro";
  padding: 0 0.6rem;
  ${theme.mixin.forMinWidth650(`
    top: 460px;
    font-size: ${theme.fontSize.annotation_desktop};
  `)}
`;

// Annotation component
const Annotation: React.FC<AnnotationProps> = ({ step }) => {
  // Destructure the 't' function from useTranslation hook
  const { t } = useTranslation();

  // Determine the annotation text based on the step prop
  const annotationText = step === "0" ? "annotation.step0" : "annotation.step1";

  return (
    <AnnotationDiv>
      <span data-testid={`annotation-step${step}`}>{t(annotationText)}</span>
    </AnnotationDiv>
  );
};

export default Annotation;
