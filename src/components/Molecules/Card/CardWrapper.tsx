import Image from '../../Atoms/Image/Image';
import styled from 'styled-components';


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled(Image)`
  margin-bottom: 20px;
`;

export const Typography = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;