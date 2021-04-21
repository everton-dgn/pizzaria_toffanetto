import { c } from 'theme'
import { useReadToken } from 'hooks/UseToken'
import * as C from 'components'

export const Etapa4 = () => {
  // redireciona para página inicial se não validar etapa-3
  useReadToken('tokenPageStep4')

  return (
    <>
      <C.HeadPage title="Checkout 4/4" />
      <C.Steps activeStep={[true, true, true, true, false]} />
      <C.TitleSection title="Preencha com seus dados" />
      <C.Cart />
      <c.Container>
        <C.FormData />
      </c.Container>
    </>
  )
}

export default Etapa4
