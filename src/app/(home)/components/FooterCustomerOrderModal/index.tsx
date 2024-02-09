import { CartButton } from 'components/atoms'
import { QuantityCounterButton } from 'components/molecules'

import S from './styles.module.scss'

const FooterCustomerOrderModal = () => {
  return (
    <div className={S.footer_modal}>
      <QuantityCounterButton
        quantity={0}
        onDecrease={() => ({})}
        onIncrease={() => ({})}
      />
      <CartButton label="Adicionar" />
    </div>
  )
}

export default FooterCustomerOrderModal
