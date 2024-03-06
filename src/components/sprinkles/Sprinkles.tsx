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
    transform: translateY(-110vh) rotate(0deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
  }
`;

const SprinkleDiv = styled.div`
  position: absolute;
  width: 10px;
  opacity: 1;
  animation: ${sprinkleAnimation} linear infinite 5.5s;
`;

const Sprinkle: React.FC = () => {
  const sprinkleIconNames = [];

  // Get array with sprinkles names strings
  for (let i = 1; i <= 10; i++) {
    const iconName = `sprinkle${i}`;
    sprinkleIconNames.push(iconName);
  }

  // Combine sprinkles array with itself to double the elements
  const doubledSprinkles = [...sprinkleIconNames, ...sprinkleIconNames];

  return (
    <SprinklesContainer aria-label="sprikles decoration">
      {doubledSprinkles.map((sprinkleName, index) => (
        <SprinkleDiv
          key={index}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 700}ms`,
            animationDuration: `${Math.random() * 2 + 5}s`,
          }}
        >
          <Icon name={sprinkleName} />
        </SprinkleDiv>
      ))}
    </SprinklesContainer>
  );
};

export default Sprinkle;
