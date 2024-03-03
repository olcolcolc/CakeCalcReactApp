import styled from "@emotion/styled";
import Stepper from "../stepper/Stepper";
import { theme } from "../../styles/theme";
import { useState } from "react";

const MainContainer = styled.div<{ isLastStep: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0px auto;
  background-color: ${(props) =>
    props.isLastStep ? theme.colors.pink : theme.colors.yellow};
  height: 26rem;
  width: 100%;
  ${theme.mixin.forMinWidth650(`
      margin: 120px auto 0px auto;
      border-radius: 30px;
      width: 40rem;
    `)}
`;

const MainContainerComponent: React.FC = () => {
  const [isLastStep, setIsLastStep] = useState(false);

  return (
    <MainContainer data-testid="main-container" isLastStep={isLastStep}>
      <Stepper isLastStep={isLastStep} setIsLastStep={setIsLastStep} />
    </MainContainer>
  );
};

export default MainContainerComponent;
