import { useEffect, useState } from "react";
import Circle from "../circle/Circle";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Button from "../button/Button";
import Steps from "../steps/Steps";

const StepperContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  align-items: center;
  width: 400px;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: #e0e0e0;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 5px;
    width: 100%;
    height: 4px;
    z-index: 0;
    transition: 0.4s ease;
  }
`;

const Progress = styled.div`
  position: absolute;
  background: ${theme.colors.startButton};
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-radius: 5px;
  width: 50%;
  height: 4px;
  z-index: 0;
  transition: 0.4s ease;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

const Stepper = () => {
  const [circle] = useState(5); //How many steps
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(()=>{
    setWidth(100/(circle-1)*active)
  },[circle,active])
  const arr = [];
  console.log(active, "Current step")
  for (let i = 0; i < circle; i++) {
    arr.push(<Circle classname={i<=active?"active":""} key={i}>{i}</Circle>);
  }

  return (
    <StepperContainer>
      <Content>
        <ProgressBar>
          <Progress style={{width:width+"%"}}></Progress>
          {arr}
        </ProgressBar>
        <Steps number={active} /> 
        <ButtonsContainer>
            <Button
                name="previous"
                disabled={active <= 0}
                onClick={() => {
                    if (active <= 0) {
                    setActive(0);
                    } else setActive(active - 1);
                }}
            />
            <Button
                name="next"
                disabled={active >= circle - 1}
                onClick={() => {
                    if (active >= circle - 1) {
                    setActive(circle - 1);
                    } else setActive(active + 1);
                }}
            />
        </ButtonsContainer>
      </Content>
    </StepperContainer>
  );
};

export default Stepper;
