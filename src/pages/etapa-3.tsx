import { TitleSection, Steps, Cart, Additional, BtnNext } from 'components'
import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const Etapa3 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Steps activeStep={[true, true, true, false, false]} />
      <TitleSection title="Selecione adicionais para a pizza" />
      <Cart />
      <c.Container>
        <Additional data={dataApi.additionals} />
        <BtnNext route={'/etapa-4'} />
      </c.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await axios.get('http://localhost:3000/api/additionals')
  const dataApi = res.data[0]

  return {
    props: {
      dataApi
    }
  }
}

export default Etapa3
