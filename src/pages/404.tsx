import { TitleSection } from 'components'
import * as S from 'styles/pages/404'
import { c } from 'theme'
import Image from 'next/image'
import Router from 'next/router'

export default function Custom404() {
  return (
    <>
      <TitleSection title="Erro 404" />
      <c.Container>
        <S.ContainImg>
          <Image
            src="/img/not-found.svg"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </S.ContainImg>

        <S.Paragraph>
          Página não encontrada! Por favor, verifique a url acessada.
          <br />
          <br />
          Caso prefira, clique no botão abaixo e retorne para a página inicial:
        </S.Paragraph>
        <S.BtnHome onClick={() => Router.push('/')}>Página Inicial</S.BtnHome>
      </c.Container>
    </>
  )
}
