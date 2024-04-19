// components/Image.tsx
import styled from 'styled-components';

const StyledImage = styled.img`
      width: 100%;
`;

const Image: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;