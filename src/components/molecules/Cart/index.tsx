// @ts-nocheck
'use client'

import { useContext, useEffect } from 'react'

import { getStorage } from 'utils/HandleSessionStorage'

import { useCart } from 'hooks/UseCart'
import { DataContext } from 'hooks/UseContext'

import S from './styles.module.scss'

export const Cart = () => {
  const { cart, setCart } = useContext(DataContext)
  const convertCart = useCart(cart)

  useEffect(() => {
    getStorage('cart') && setCart(getStorage('cart'))
  }, [setCart])

  return (
    <div className={S.container}>
      <div className={S.containerCart}>
        {cart === 0 ? (
          <img
            src="/img/icons/cart.svg"
            alt="Imagem de uma pizza"
            width="80"
            height="50"
          />
        ) : (
          <img
            src="/img/icons/cart-full.svg"
            alt="Imagem de uma pizza"
            width="80"
            height="50"
          />
        )}
        <p className={S.cart}>
          Valor Total: <b>{convertCart}</b>
        </p>
      </div>
    </div>
  )
}
