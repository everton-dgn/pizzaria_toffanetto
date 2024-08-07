'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Error = ({
  error
  // reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  const { push } = useRouter()

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <>
      <h1>Erro 404</h1>
      <div className="px-5 container-col">
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
          Ir para a página inicial
        </button>
      </div>
    </>
  )
}

export default Error
