import { useContext } from 'react'
import * as S from 'components/Cart/styles'
import { DataContext } from 'hooks/UseContext'
import { c } from 'theme'
import { useCart } from 'hooks/UseCart'

export const Cart = () => {
  const { cart } = useContext(DataContext)
  const convertCart = useCart(cart)

  return (
    <>
      <c.Container>
        <S.ContainerCart>
          <S.Cart>
            Valor Total: <b>{convertCart}</b>
          </S.Cart>
        </S.ContainerCart>
      </c.Container>
    </>
  )
}
