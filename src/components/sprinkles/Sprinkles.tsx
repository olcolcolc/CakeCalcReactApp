import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const SprinkleContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const bounceInSprinkles = keyframes`
  0% {
    opacity: 0;
    height: 0;
    width: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    height: 3vh;
    width: 1vh;
  }
  100% {
    height: 2.5vh;
    width: 0.8vh;
    opacity: 1;
  }
`;

const Sprinkle = styled.div`
  position: absolute;
  border-radius: 100vh;
  box-shadow: 0.5vh 0.5vh 0 rgba(0, 0, 0, 0.25);
  background: ${theme.colors.sprinkle};
  opacity: 0;
  height: 0;
  width: 0;
  animation: ${bounceInSprinkles} 0.5s forwards;
`;

const generateSprinkles = (count: number) => {
  const sprinkles = [];
  for (let i = 0; i < count; i++) {
    const rotation = Math.random() * 360;
    sprinkles.push(styled(Sprinkle)`
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      transform: rotate(${rotation}deg);
      animation-delay: ${Math.random() * 2}s;
    `);
  }
  return sprinkles;
};

const SprinkleComponents = generateSprinkles(50); // Generate 50 sprinkles

const SprinkleAnimation = () => {
  return (
    <SprinkleContainer>
      {SprinkleComponents.map((SprinkleComponent, index) => (
        <SprinkleComponent key={index} />
      ))}
    </SprinkleContainer>
  );
};

export default SprinkleAnimation;
