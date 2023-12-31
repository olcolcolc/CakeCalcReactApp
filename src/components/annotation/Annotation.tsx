import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { theme } from "../../styles/theme";

type AnnotationProps = {
  step: "0" | "1";
};

const AnnotationDiv = styled.div`
  display: flex;
  position: absolute;
  top: 385px;
  text-align: center;
  font-size: ${theme.fontSize.annotation};
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
