import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import quicksand from 'theme/variables/fontFamily'

import { CookieWarning, PopupInstallPwa, Toast } from 'components/molecules'
import { BottomBar, Footer, TopBar } from 'components/organisms'
import { MainProvider } from 'providers/mainProvider'

import 'theme/globals.css'
import { ROOT_METADATA } from 'constants/rootMetadata'
import { VIEWPORT } from 'constants/viewport'

export const metadata: Metadata = ROOT_METADATA
export const viewport: Viewport = VIEWPORT

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pt-BR">
    <head>
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="© Éverton Toffanetto" name="copyright" />
      <link href="/favicon.ico" rel="icon" type="image/ico" />
      <link href="/icon-apple.png" rel="apple-touch-icon" />
    </head>

    <body className={quicksand.className}>
      <MainProvider>
        <TopBar />
        {children}
        <Footer />
        <BottomBar />
        <Toast />
        <CookieWarning />
        <PopupInstallPwa />
      </MainProvider>
    </body>
  </html>
)

export default RootLayout
