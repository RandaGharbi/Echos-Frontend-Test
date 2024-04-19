import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Button from "../components/Atoms/Button/Button";



describe('Button component', () => {
  it('renders correctly with subscribe type', () => {
    const { getByText } = render(<Button onClick={() => {}} type="subscribe">Subscribe</Button>);
    const button = getByText('Subscribe');
    expect(button).toBeInTheDocument();
  });
   

  it('renders correctly with register type', () => {
    const { getByText } = render(<Button onClick={() => {}} type="register">Register</Button>);
    const button = getByText('Register');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: #B00005');
  });

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick} type="subscribe">Subscribe</Button>);
    const button = getByText('Subscribe');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
