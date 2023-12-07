import React from "react";
import styled from "@emotion/styled";

interface WelcomeIconProps {
  src: string;
  alt: string;
}

const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 20px;
  ${(props) =>
    props.theme.mixin.forDesktop(`
    width: 300px;
  `)}
`;

const WelcomeIcon: React.FC<WelcomeIconProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />;
};

export default WelcomeIcon;
