import { converterNumberToCurrency } from 'data/formatters'

import type { CartButtonProps } from './types'

const getCartImageUrlByItemCount = (amount: number) => {
  if (amount === 0) return '/img/cart/carrinho-vazio.webp'
  if (amount === 1) return '/img/cart/carrinho-1-item.webp'
  return '/img/cart/carrinho-cheio.webp'
}

const cartValue = 0

export const CartButton = ({ label }: CartButtonProps) => {
  const valueCart = converterNumberToCurrency({
    value: cartValue || 0,
    setsCurrencySymbol: true
  })

  return (
    <button
      className="flex max-w-fit bg-secondary-500 px-3 py-1.5 transition-all duration-150 ease-linear br-full center g-2 fs-sm-semibold hover:bg-green"
      aria-label="Abrir carrinho de compras"
    >
      <img
        src={getCartImageUrlByItemCount(0)}
        alt="Carrinho de compras"
        fetchPriority="high"
        className="flex h-[21px] min-h-[21px] w-[31px] min-w-[31px]"
        width="144px"
        height="100px"
      />
      {label && ` ${label} `}
      {valueCart}
    </button>
  )
}
