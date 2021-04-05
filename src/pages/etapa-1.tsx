import axios from 'axios'
import { TitleSection, Steps, Cart, Flavor } from 'components'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const Etapa1 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Steps activeStep={[true, false, false, false, false]} />
      <TitleSection title="Selecione o sabor da pizza" />
      <Cart />
      <c.Container>
        <Flavor data={dataApi.pizzas} />
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

export default Etapa1
