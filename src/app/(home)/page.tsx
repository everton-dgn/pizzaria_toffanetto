import { notFound } from 'next/navigation'

import { ContainerCardControlRender, TitleSection } from 'components/atoms'
import { CardsSquare } from 'components/molecules'
import { Banner } from 'components/organisms'

import { dailyPizzaOptionsFindAll } from 'infra/services/pizzas/findAll'

import S from './styles.module.scss'

const Home = async () => {
  const { data: pizzas } = await dailyPizzaOptionsFindAll()

  if (!pizzas) notFound()

  return (
    <>
      <Banner />
      <TitleSection title="Peça a sua pizza online agora!" />
      <div className={S.container}>
        <p className={S.paragraph}>
          Aproveite a nossa promoção! Comprando a nossa recomendação de pizza do
          dia você acumula pontos para a próxima compra. Quantos mais pontos
          você acumular, maior será o desconto na próxima compra.
        </p>
        <ContainerCardControlRender minHeight={678}>
          <CardsSquare data={pizzas} />
        </ContainerCardControlRender>
      </div>
    </>
  )
}

export default Home
