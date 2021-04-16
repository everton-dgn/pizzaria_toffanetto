import { TitleSection, Steps, Cart, Additional, BtnNext } from 'components'
import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useReadToken } from 'hooks/UseToken'

const Etapa3 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // redireciona para página inicial se não validar etapa-2
  useReadToken('tokenPageStep3')

  return (
    <>
      <Steps activeStep={[true, true, true, false, false]} />
      <TitleSection title="Selecione adicionais para a pizza" />
      <Cart />
      <c.Container>
        <Additional data={dataApi.additionals} />
        <BtnNext
          route={'/etapa-4'}
          token={{
            name: 'tokenPageStep4',
            value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ2'
          }}
        />
      </c.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/everton-dgn/pizzaria_toffanetto/main/public/api/additionals.json'
  )
  const dataApi = data[0]

  return {
    props: {
      dataApi
    }
  }
}

export default Etapa3
