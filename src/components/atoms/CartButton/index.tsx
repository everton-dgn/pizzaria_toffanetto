import { clsx } from 'clsx'

import { converterNumberToCurrency } from 'data/formatters'

import S from './styles.module.scss'

import type { CartButtonProps } from './types'

const getCartImageUrlByItemCount = (amount: number) => {
  if (amount === 0) return '/img/cart/carrinho-vazio.webp'
  if (amount === 1) return '/img/cart/carrinho-1-item.webp'
  return '/img/cart/carrinho-cheio.webp'
}

const cartValue = 0

export const CartButton = ({ className }: CartButtonProps) => (
  <button
    className={clsx(S.button, className)}
    aria-label="Abrir carrinho de compras"
  >
    <img
      src={getCartImageUrlByItemCount(0)}
      alt="Carrinho de compras"
      fetchPriority="high"
      className={S.image}
      width="144px"
      height="100px"
    />
    {converterNumberToCurrency({
      value: cartValue || 0,
      setsCurrencySymbol: true
    })}
  </button>
)
