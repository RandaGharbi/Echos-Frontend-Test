import { createGlobalStyle } from 'styled-components'
import { Inter } from 'next/font/google'

// Définition de la police Inter avec la sous-ensemble "latin"
const inter = Inter({ subsets: ['latin'] })

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;  
  }
  .header-bg {
    background-color: #ffffff;
    box-shadow: 1px 6px 8px 1px rgba(151, 143, 143, 0.59);
    -webkit-box-shadow: 1px 6px 8px 1px rgba(151, 143, 143, 0.59);
    -moz-box-shadow: 1px 6px 8px 1px rgba(151, 143, 143, 0.59);
  }
`
