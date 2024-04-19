import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  buttonType: 'subscribe' | 'register';
}

const StyledButton = styled.div<StyledButtonProps>`
  background-color: ${props => (props.buttonType === 'subscribe' ? '#FAEC70' : '#B00005')};
  border-radius: 40px;
  padding: 8px 30px 8px 30px;
  gap: 5px;
  border: none;
  position: relative;
  bottom: 7rem;
  /* Add other button styles here */
`;

const Button: React.FC<{ onClick: () => void; children: React.ReactNode; type: 'subscribe' | 'register' }> = ({ onClick, children, type }) => {
  return <StyledButton buttonType={type} onClick={onClick}>{children}</StyledButton>;
};


export default Button;
