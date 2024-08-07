'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const { push } = useRouter()

  return (
    <>
      <h1>Erro 404</h1>
      <div className="px-20 container-col">
        <div className="jc-center row">
          <Image
            src="/img/not-found.svg"
            alt="Erro 404"
            width={400}
            height={400}
            priority
            className="h-auto max-w-full"
          />
        </div>

        <p className="mx-auto mb-5 w-full max-w-screen-md pb-3 fs-xl tx-center">
          Página não encontrada! Por favor, verifique a url acessada.
          <br />
          <br />
          Caso prefira, clique no botão abaixo e retorne para a página inicial:
        </p>
        <button
          className="bg-secondary-500 uppercase fs-base"
          onClick={() => push('/')}
        >
          Página Inicial
        </button>
      </div>
    </>
  )
}

export default NotFound
