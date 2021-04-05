import * as S from 'styles/pages/home'
import { TitleSection, CardsSquare } from 'components'
import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const Home = ({ dataApi }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <S.ContainImg>
        <img
          src="/img/headers/background-header.jpg"
          alt="Imagem de uma pizza"
        />
      </S.ContainImg>

      <TitleSection title="Peça a sua pizza online agora!" />
      <c.Container>
        <S.Paragraph>
          Aproveite a nossa promoção! Comprando a nossa recomendação de pizza do
          dia você acumula pontos para a próxima compra. Quantos mais pontos
          você acumular, maior será o desconto na próxima compra.
        </S.Paragraph>
        <CardsSquare data={dataApi.pizzas} />
      </c.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await axios.get('http://localhost:3000/api/pizzas')

  const dataApi = res.data[0]

  return {
    props: {
      dataApi
    }
  }
}

export default Home
