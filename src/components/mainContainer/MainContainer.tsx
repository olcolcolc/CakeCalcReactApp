import styled from "@emotion/styled";
import Stepper from "../stepper/Stepper";
import { theme } from "../../styles/theme";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 120px auto 0px auto;
  background-color: ${theme.colors.yellow};
  height: 26rem;
  width: 100%;
  ${theme.mixin.forDesktop(`
      border-radius: 50px;
      width: 46rem;
    `)}
`;

const MainContainerComponent: React.FC = () => {
  return (
    <MainContainer data-testid="main-container">
      <Stepper />
    </MainContainer>
  );
};

export default MainContainerComponent;
