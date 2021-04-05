import { TitleSection, Steps, Cart, FormData } from 'components'
import { c } from 'theme'

export const Etapa4 = () => {
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
