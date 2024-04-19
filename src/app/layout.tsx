"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { Inter } from "next/font/google";
import { GlobalStyle } from "../styles/globalStyles"; // Importation du GlobalStyle depuis le fichier externe

// Définition de la police Inter avec la sous-ensemble "latin"
const inter = Inter({ subsets: ["latin"] });


const BodyWrapper = styled.body.attrs({
  className: inter.className,
})``;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <BodyWrapper>{children}</BodyWrapper>
      </html>
    </>
  );
};

export default RootLayout;
