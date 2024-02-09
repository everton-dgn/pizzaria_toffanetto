'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

import { DataContext } from 'hooks/UseContext'

import S from 'app/styles.module.scss'

export const Error = ({
  error
  // reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  const { push } = useRouter()
  const { hasNetwork } = useContext(DataContext)

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <>
      <h1>Erro 404</h1>
      <div className={S.container}>
        <div className={S.containImg}>
          {hasNetwork ? (
            <Image
              src="/img/not-found.svg"
              alt="Erro 404"
              width={400}
              height={400}
              priority
            />
          ) : (
            <img
              src="/img/not-found.svg"
              alt="Erro 404"
              width="400"
              height="400"
              fetchPriority="high"
            />
          )}
        </div>

        <p className={S.paragraph}>
          Página não encontrada! Por favor, verifique a url acessada.
          <br />
          <br />
          Caso prefira, clique no botão abaixo e retorne para a página inicial:
        </p>
        <button className={S.btnHome} onClick={() => push('/')}>
          Ir para a página inicial
        </button>
      </div>
    </>
  )
}

export default Error
