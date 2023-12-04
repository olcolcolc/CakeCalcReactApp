import styled from "@emotion/styled";
import Stepper from "../stepper/Stepper";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  background-color: white;
  height: 31rem;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  ${({ theme }) =>
    theme.mixin.forDesktop(`
      border-radius: 50px;
      width: 31rem;
      margin-top: 50px;
    `)}
`;

const MainContainerComponent: React.FC = () => {
  return (
    <MainContainer>
      <Stepper />
    </MainContainer>
  );
};

export default MainContainerComponent;
