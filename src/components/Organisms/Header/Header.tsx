import React from "react";
import { HeaderContainer, Content, Title, Typography } from "./HeaderWrapper";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Content>
        <Title>Newsletters</Title>
        <Typography>
          Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
          et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
          newsletters selon vos centres d’intérêt et gérer plus facilement
          l’inscription à vos newsletters.{" "}
        </Typography>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
