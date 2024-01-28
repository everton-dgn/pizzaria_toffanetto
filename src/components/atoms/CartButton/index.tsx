import { clsx } from 'clsx'

import S from './styles.module.scss'

import type { CartButtonProps } from './types'

const getCartImageUrlByItemCount = (amount: number) => {
  if (amount === 0) return '/img/cart/carrinho-vazio.webp'
  if (amount === 1) return '/img/cart/carrinho-1-item.webp'
  return '/img/cart/carrinho-cheio.webp'
}

export const CartButton = ({ className }: CartButtonProps) => {
  const quantityOfItems: number = 0

  return (
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
      {quantityOfItems} {quantityOfItems === 1 ? 'item' : 'itens'}
    </button>
  )
}
