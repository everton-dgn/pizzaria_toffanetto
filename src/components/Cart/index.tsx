import React, { useContext } from 'react'
import * as S from 'components/Cart/styles'
import { DataContext } from 'hooks/UseContext'
import { c } from 'theme'
import { useCart } from 'hooks/UseCart'
import Image from 'next/image'

export const Cart = () => {
  const { cart } = useContext(DataContext)

  const convertCart = useCart(cart)

  return (
    <>
      <c.Container>
        <S.ContainerCart>
          {cart === 0 ? (
            <Image
              src="/img/icons/cart.svg"
              alt="Imagem de uma pizza"
              width={80}
              height={50}
            />
          ) : (
            <Image
              src="/img/icons/cart-full.svg"
              alt="Imagem de uma pizza"
              width={80}
              height={50}
            />
          )}
          <S.Cart>
            Valor Total: <b>{convertCart}</b>
          </S.Cart>
        </S.ContainerCart>
      </c.Container>
    </>
  )
}
