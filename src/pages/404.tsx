import { TitleSection } from 'components'
import * as S from 'styles/pages/404'
import { c } from 'theme'
import Image from 'next/image'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <TitleSection title="Erro 404" />
      <c.Container>
        <S.ContainImg>
          <Image
            src="/img/not-found.svg"
            alt="Erro 404"
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
        <Link href="/" passHref>
          <S.NavLink>
            <S.BtnHome>Página Inicial</S.BtnHome>
          </S.NavLink>
        </Link>
      </c.Container>
    </>
  )
}

export default Custom404
