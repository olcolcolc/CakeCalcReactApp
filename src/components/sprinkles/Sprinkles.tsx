import React from "react";
import styled, { keyframes } from "styled-components";

const SprinkleContainer = styled.div`
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

const SprinkleImage = styled.img`
  position: absolute;
  width: 10px;
  opacity: 0;
  animation: ${sprinkleAnimation} linear forwards 0.5s;
`;

const Sprinkle: React.FC = () => {
  // Get sprinkles img paths from folder
  const sprinkles = Object.keys(
    import.meta.glob("/src/assets/illustrations/sprinkles/*.png")
  );

  // Combine sprinkles array with itself to double the elements
  const doubledSprinkles = [...sprinkles, ...sprinkles];

  return (
    <SprinkleContainer aria-label="sprikles decoration">
      {doubledSprinkles.map((sprinklePath, index) => (
        <SprinkleImage
          key={index}
          src={sprinklePath}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 700}ms`,
          }}
        />
      ))}
    </SprinkleContainer>
  );
};

export default Sprinkle;
