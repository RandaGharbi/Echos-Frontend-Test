import React, { ReactNode } from "react";
import { CardContainer, CardImage, TypographyCard } from "./CardWrapper";

interface CardProps {
  imageSrc: string;
  text: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ imageSrc, text, children }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt="Card Image" />
      <TypographyCard>{text}</TypographyCard>
      {children}
    </CardContainer>
  );
};

export default Card;
