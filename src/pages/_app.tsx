// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import GlobalStyles from 'styles/GlobalStyles'
import { DataStorage } from 'hooks/UseContext'
import { HeadPage, Header, Footer } from 'components'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'styles/loading.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DataStorage>
        <HeadPage />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </DataStorage>
      <GlobalStyles />
    </>
  )
}

export default App
