import React, { ReactNode } from "react";
import { CardContainer, CardImage, Typography } from "./CardWrapper";

interface CardProps {
  imageSrc: string;
  text: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ imageSrc, text, children }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt="Card Image" width="100%" height="auto" />
      <Typography>{text}</Typography>
      {children}
    </CardContainer>
  );
};

export default Card;
