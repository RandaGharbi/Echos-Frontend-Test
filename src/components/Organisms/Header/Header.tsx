import React from "react";
import { HeaderContainer, HeaderContent, HeaderTitle, HeaderTypography } from "./HeaderWrapper";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>Newsletters</HeaderTitle>
        <HeaderTypography>
          Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
          et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
          newsletters selon vos centres d’intérêt et gérer plus facilement
          l’inscription à vos newsletters.
        </HeaderTypography>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
