import axios from 'axios'
// import { readToken } from 'utils/HandleToken'

import { TitleSection } from 'components/atoms'
import { Cart, Size, Steps } from 'components/molecules'

import S from './styles.module.scss'

const getPizzas = async () => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/everton-dgn/pizzaria_toffanetto/main/public/api/pizzas.json'
  )

  return { data: data[0] }
}

const Etapa2 = async () => {
  const { data } = await getPizzas()

  // if (!readToken('tokenPageStep2') && typeof window !== 'undefined') {
  //   return (window.location.href = '/')
  // }

  return (
    <>
      <Steps activeStep={[true, true, false, false, false]} />
      <TitleSection title="Selecione o tamanho da pizza" />
      <Cart />
      <div className={S.container}>
        <Size sizes={data.sizesAndPrices} />
      </div>
    </>
  )
}

export default Etapa2
