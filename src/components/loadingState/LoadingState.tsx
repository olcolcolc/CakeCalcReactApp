import styled, { keyframes } from "styled-components";
import { Icon } from "../icon/Icon";

const spin = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "OggRoman";
  font-size: x-large;
`;

const IconDiv = styled.div`
  width: 100px;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: -9rem;
`;

const LoadingState = () => {
  return (
    <LoadingDiv
      aria-label="Loading state icon"
      data-testid="loading-state-icon"
    >
      <IconDiv>
        <Icon name="lightCake" />
      </IconDiv>
      Loading
    </LoadingDiv>
  );
};

export default LoadingState;
