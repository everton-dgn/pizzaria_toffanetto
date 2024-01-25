import axios from 'axios'

import { TitleSection } from 'components/atoms'
import { Cart, Flavor, Steps } from 'components/molecules'

import S from './styles.module.scss'

const getPizzas = async () => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/everton-dgn/pizzaria_toffanetto/main/public/api/pizzas.json'
  )

  return { data: data[0] }
}

const Etapa1 = async () => {
  const { data } = await getPizzas()

  return (
    <>
      <Steps activeStep={[true, false, false, false, false]} />
      <TitleSection title="Selecione o sabor da pizza" />
      <Cart />
      <div className={S.container}>
        <Flavor data={data.pizzas} />
      </div>
    </>
  )
}

export default Etapa1
