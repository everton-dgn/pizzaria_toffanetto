import { TitleSection } from 'components'
import * as S from 'styles/pages/404'
import { c } from 'theme'
import Image from 'next/image'
import { useRouter } from 'next/router'

// eslint-disable-next-line react/display-name
export default () => {
  const router = useRouter()
  return (
    <>
      <TitleSection title="Você está Offiline!" />
      <c.Container>
        <S.ContainImg>
          <Image
            src="/img/not-found.svg"
            alt="Offiline"
            width={400}
            height={400}
          />
        </S.ContainImg>

        <S.Paragraph>
          Sem conexão com a internet! Por favor, verifique a sua internet.
          <br />
          <br />
          Caso prefira, clique no botão abaixo e retorne para a página inicial:
        </S.Paragraph>
        <S.BtnHome onClick={() => router.push('/')}>Página Inicial</S.BtnHome>
      </c.Container>
    </>
  )
}
