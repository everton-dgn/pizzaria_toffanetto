'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

import quicksand from 'theme/fontFamily'

import { DataContext } from 'hooks/UseContext'

import 'theme/reset.scss'
import 'theme/components/index.scss'
import S from './styles.module.scss'

type ErrorProps = {
  error: Error
  reset: () => void
}

const GlobalError = ({ error, reset }: ErrorProps) => {
  const { push } = useRouter()
  const { hasNetwork } = useContext(DataContext)
  // eslint-disable-next-line no-console
  console.log(error, reset)

  return (
    <html lang="pt-BR">
      <head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="© Éverton Toffanetto" name="copyright" />
        <meta content="#7f1d1d" name="theme-color" />
        <link href="/favicon.ico" rel="icon" type="image/ico" />
        <link href="/icon-apple.png" rel="apple-touch-icon" />
        <title>Ops! Ocorreu um erro</title>
      </head>

      <body className={quicksand.className}>
        {/* <Error reset={reset} /> */}
        {/* <p>{error.message}</p> */}

        <h1>Erro 404</h1>
        <div className={S.container}>
          <div className={S.containImg}>
            {hasNetwork ? (
              <Image
                src="/img/not-found.svg"
                alt="Erro 404"
                width={400}
                height={400}
              />
            ) : (
              <img
                src="/img/not-found.svg"
                alt="Erro 404"
                width="400"
                height="400"
              />
            )}
          </div>

          <p className={S.paragraph}>
            Página não encontrada! Por favor, verifique a url acessada.
            <br />
            <br />
            Caso prefira, clique no botão abaixo e retorne para a página
            inicial:
          </p>
          <button className={S.btnHome} onClick={() => push('/')}>
            Página Inicial
          </button>
        </div>
      </body>
    </html>
  )
}

export default GlobalError
