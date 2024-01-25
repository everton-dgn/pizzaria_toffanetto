import { useRouter } from 'next/navigation'

import { Button, TitleSection } from 'components/atoms'
import { Cart, Steps } from 'components/molecules'
import { FormData } from 'components/organisms'

import S from './styles.module.scss'

const Etapa4 = () => {
  const { push } = useRouter()

  return (
    <>
      <Steps activeStep={[true, true, true, true, false]} />
      <TitleSection title="Preencha com seus dados" />
      <Cart />
      <div className={S.container}>
        <FormData />
        <div className={S.wrapperBtn}>
          <Button
            label="VOLTAR"
            onClick={() => push('/checkout/terceira-etapa')}
          />
        </div>
      </div>
    </>
  )
}

export default Etapa4
