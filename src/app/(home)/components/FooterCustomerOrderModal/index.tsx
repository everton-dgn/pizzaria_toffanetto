import { CartButton } from 'components/atoms'
import { QuantityCounterButton } from 'components/molecules'

const FooterCustomerOrderModal = () => {
  return (
    <div className="flex-wrap gap-16 border-t border-neutral-light-lavender px-16 py-12 shadow-sm jc-between ai-center row-full">
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
