'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import quicksand from 'theme/variables/fontFamily'

import 'theme/globals.css'

type ErrorProps = {
  error: Error
  reset: () => void
}

const GlobalError = ({ error, reset }: ErrorProps) => {
  const { push } = useRouter()
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
        <div className="px-20 container-col">
          <div className="jc-center row">
            <Image
              src="/img/not-found.svg"
              alt="Erro 404"
              width={400}
              height={400}
              className="h-auto max-w-full"
            />
          </div>

          <p className="mx-auto mb-20 w-full max-w-[800px] pb-12 text-center text-20">
            Página não encontrada! Por favor, verifique a url acessada.
            <br />
            <br />
            Caso prefira, clique no botão abaixo e retorne para a página
            inicial:
          </p>
          <button
            className="bg-secondary-500 text-16 uppercase"
            onClick={() => push('/')}
          >
            Página Inicial
          </button>
        </div>
      </body>
    </html>
  )
}

export default GlobalError
