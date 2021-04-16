import { TitleSection, Steps, Cart, Size } from 'components'
import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useReadToken } from 'hooks/UseToken'

const Etapa2 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // redireciona para página inicial se não validar etapa-1
  useReadToken('tokenPageStep2')

  return (
    <>
      <Steps activeStep={[true, true, false, false, false]} />
      <TitleSection title="Selecione o tamanho da pizza" />
      <Cart />
      <c.Container>
        <Size data={dataApi} />
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
