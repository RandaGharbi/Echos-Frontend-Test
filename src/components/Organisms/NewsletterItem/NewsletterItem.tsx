import React from "react";
import { Article, CardTitle } from "./NewsletterItemWrapper";
import Card from "../../Molecules/Card/Card";
import Button from "../../Atoms/Button/Button";


interface NewsletterItemProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonType: "subscribe" | "register";
  onClick: () => void;
}

const NewsletterItem: React.FC<NewsletterItemProps> = ({
  image,
  title,
  description,
  buttonText,
  buttonType,
  onClick,
}) => {
  return (
    <Article>
      <Card text={description} imageSrc={image}>
        <CardTitle>{title}</CardTitle>
        <Button onClick={onClick} type={buttonType}>
          {buttonText}
        </Button>
      </Card>
    </Article>
  );
};

export default NewsletterItem;
