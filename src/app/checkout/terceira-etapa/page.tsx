import axios from 'axios'

import { Button, TitleSection } from 'components/atoms'
import { Additional, Cart, Steps } from 'components/molecules'

import S from './styles.module.scss'

const getPizzas = async () => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/everton-dgn/pizzaria_toffanetto/main/public/api/additionals.json'
  )

  return { data: data[0] }
}

const Etapa3 = async () => {
  const { data } = await getPizzas()

  return (
    <>
      <Steps activeStep={[true, true, true, false, false]} />
      <TitleSection title="Selecione adicionais para a pizza" />
      <Cart />
      <div className={S.container}>
        <Additional data={data.additionals} />
        <div className={S.wrapperBtn}>
          <Button
            label="VOLTAR"
            // onClick={() => push('/checkout/segunda-etapa')}
          />
          <div className={S.space} />
          <Button
            label="AVANÇAR"
            // onClick={() => push('/checkout/quarta-etapa')}
          />
        </div>
      </div>
    </>
  )
}

export default Etapa3
