import { CartButton } from 'components/atoms'
import { QuantityCounterButton } from 'components/molecules'

const FooterCustomerOrderModal = () => {
  return (
    <div className="px-1 py-[3px] shadow-sm ai-center bc-neutral-light-lavender bw-b-4 bw-t f-wrap g-1 jc-between row-full">
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
