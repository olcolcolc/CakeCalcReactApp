import styled from "@emotion/styled";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto 20px auto;
    background-color: white;
    border-radius: 50px;
    height: 47rem;
    width: 31rem;
    min-width: 31rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;`;

const MainContainerComponent: React.FC = () => {
  return (
    <MainContainer>
    </MainContainer>
  );
};

export default MainContainerComponent;
