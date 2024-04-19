'use client'

import { ReactNode } from 'react'
import { GlobalStyle } from '../styles/globalStyles' // Importation du GlobalStyle depuis le fichier externe
import StyledComponentsRegistry from './lib/registry'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <html lang='en'>
        <StyledComponentsRegistry>
          <body>{children}</body>
        </StyledComponentsRegistry>
      </html>
    </>
  )
}

export default RootLayout
