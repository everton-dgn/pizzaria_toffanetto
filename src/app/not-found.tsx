'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import S from 'app/styles.module.scss'

const NotFound = () => {
  const { push } = useRouter()

  return (
    <>
      <h1>Erro 404</h1>
      <div className={S.container}>
        <div className={S.containImg}>
          <Image
            src="/img/not-found.svg"
            alt="Erro 404"
            width={400}
            height={400}
            priority
          />
        </div>

        <p className={S.paragraph}>
          Página não encontrada! Por favor, verifique a url acessada.
          <br />
          <br />
          Caso prefira, clique no botão abaixo e retorne para a página inicial:
        </p>
        <button className={S.btnHome} onClick={() => push('/')}>
          Página Inicial
        </button>
      </div>
    </>
  )
}

export default NotFound
