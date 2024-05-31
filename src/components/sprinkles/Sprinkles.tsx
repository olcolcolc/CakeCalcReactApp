import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "../icon/Icon";

const SprinklesContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const sprinkleAnimation = keyframes`
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateY(100%) rotate(360deg);
    opacity: 1;
  }
`;

const SprinkleDiv = styled.div`
  position: absolute;
  width: 10px;
  opacity: 0;
  animation: ${sprinkleAnimation} linear forwards 0.5s;
`;

const Sprinkle: React.FC = () => {
  // Generate array with sprinkle names strings
  const sprinkleIconNames = Array.from(
    { length: 10 },
    (_, i) => `sprinkle${i + 1}`
  );

  // Combine sprinkles array with itself to double the elements
  const doubledSprinkles = [...sprinkleIconNames, ...sprinkleIconNames];

  return (
    <SprinklesContainer aria-label="sprikles decoration">
      {doubledSprinkles.map((sprinkleName, index) => (
        <SprinkleDiv
          data-testid="sprinkle-div"
          key={index}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 700}ms`,
          }}
        >
          <Icon name={sprinkleName} />
        </SprinkleDiv>
      ))}
    </SprinklesContainer>
  );
};

export default Sprinkle;
