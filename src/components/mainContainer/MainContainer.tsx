import styled from "@emotion/styled";
import Button from "../button/Button";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    margin-top: 50px;
    background-color: white;
    border-radius: 50px;
    height: 31rem;
    width: 31rem;
    min-width: 31rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;`;

const MainContainerComponent: React.FC = () => {
  return (
    <MainContainer>
      <Button name="next"></Button>
      <Button name="previous"></Button>
    </MainContainer>
  );
};

export default MainContainerComponent;
