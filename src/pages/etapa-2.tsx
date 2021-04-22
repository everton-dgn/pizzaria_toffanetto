import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { readToken } from 'utils/HandleToken'
import * as C from 'components'

const Etapa2 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // redireciona para página inicial se não validar etapa-1
  readToken('tokenPageStep2')

  return (
    <>
      <C.HeadPage title="Checkout 2/4" />
      <C.Steps activeStep={[true, true, false, false, false]} />
      <C.TitleSection title="Selecione o tamanho da pizza" />
      <C.Cart />
      <c.Container>
        <C.Size sizes={dataApi.sizesAndPrices} />
      </c.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/everton-dgn/pizzaria_toffanetto/main/public/api/pizzas.json'
  )
  const dataApi = data[0]

  return {
    props: {
      dataApi
    }
  }
}

export default Etapa2
