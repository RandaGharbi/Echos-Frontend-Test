import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #F4F4F4;
  padding: 20px;
  width: 970px;
  height: 135px;
  position: relative;
  top: 30px;
  border-radius: 10px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-family: sans-serif;
  font-size: 2em;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  line-height: 33px;
  text-align: center;
  padding-bottom: 10px;
  
`;

export const Typography = styled.p`
 font-family: sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -1%;
  text-align: center;
  color: #212121;
  margin: 0; /* Supprimer la marge par défaut */
`;
