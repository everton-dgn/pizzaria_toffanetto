import { TitleSection, Steps, Cart, FormData } from 'components'
import { c } from 'theme'
import { useReadToken } from 'hooks/UseToken'

export const Etapa4 = () => {
  // redireciona para página inicial se não validar etapa-3
  useReadToken('tokenPageStep4')

  return (
    <>
      <Steps activeStep={[true, true, true, true, false]} />
      <TitleSection title="Preencha com seus dados" />
      <Cart />
      <c.Container>
        <FormData />
      </c.Container>
    </>
  )
}

export default Etapa4
