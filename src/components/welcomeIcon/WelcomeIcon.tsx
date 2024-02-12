import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

interface WelcomeIconProps {
  src: string;
  alt: string;
}

const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 20px;
  ${theme.mixin.forDesktop(`
    width: 300px;
  `)}
`;

const WelcomeIcon: React.FC<WelcomeIconProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />;
};

export default WelcomeIcon;
