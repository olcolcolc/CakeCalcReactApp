import styled from "@emotion/styled";
import Stepper from "../stepper/Stepper";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { Icon } from "../icon/Icon";

const MainContainer = styled.div<{ isLastStep: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0px auto;
  background-color: ${(props) =>
    props.isLastStep ? theme.colors.pink : theme.colors.yellow};
  height: 26rem;
  ${theme.mixin.forMinWidth650(`
      margin: 100px auto 0px auto;
      border-radius: 30px;
      width: 40rem;
    `)}
`;

const Donut = styled.div`
  display: none;
  ${theme.mixin.forMinWidth650(`
    display: flex;
    position: absolute;
    margin: 80px 660px 0 0;
    z-index: 100;
    `)}
`;

const MainContainerComponent: React.FC = () => {
  const [isLastStep, setIsLastStep] = useState(false);

  return (
    <>
      <MainContainer data-testid="main-container" isLastStep={isLastStep}>
        <Donut>
          <Icon name="donut" />
        </Donut>
        <Stepper isLastStep={isLastStep} setIsLastStep={setIsLastStep} />
      </MainContainer>
    </>
  );
};

export default MainContainerComponent;
