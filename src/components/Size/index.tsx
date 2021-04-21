import { useContext, useEffect } from 'react'
import * as S from 'components/Size/styles'
import { DataContext } from 'hooks/UseContext'
import * as C from 'components'
import { useCart } from 'hooks/UseCart'
import { getStorage, setStorage } from 'utils/HandleSessionStorage'

interface SizeProps {
  sizes: [
    {
      size: string
      price: number
      slices: number
    }
  ]
}

export const Size = ({ sizes }: SizeProps) => {
  const { size, setSize, setCart } = useContext(DataContext)

  useEffect(() => getStorage('size') && setSize(getStorage('size')), [])

  const addCart = (price: number) => {
    setCart(price)
    setStorage('cart', price)
  }

  const handleSizeChecked = (price: number, currentSize: string) => {
    const sizeAndPrice = { price: price, size: currentSize }
    setSize(sizeAndPrice)

    setStorage('size', sizeAndPrice)

    addCart(price)
  }

  const ConvertToPrice = (price: number) => useCart(price)

  return (
    <>
      <S.TitleComponent>Tamanhos</S.TitleComponent>
      <S.ContainerSize>
        {sizes.map(el => (
          <S.Card key={el.size} verifyCheck={size.size === el.size}>
            <S.ContainerRadio>
              <S.RadioContent>
                <S.RadioLabel>
                  <input
                    type="radio"
                    checked={size.size === el.size}
                    onChange={() => handleSizeChecked(el.price, el.size)}
                    value={el.size}
                    name={el.size}
                  />
                </S.RadioLabel>
                <S.ContainerInfo>
                  <S.Title>Pizza {el.size}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>
                      <img
                        src="/img/icons/slice-pizza.svg"
                        alt="Imagem de uma pizza"
                        width="24"
                        height="25"
                      />
                      ({el.slices} Fatias)
                    </S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>{ConvertToPrice(el.price)}</S.Title>
                </S.ContainerInfo>
              </S.RadioContent>
            </S.ContainerRadio>
          </S.Card>
        ))}

        <C.BtnNext
          route={'/etapa-3'}
          disabled={!size.size}
          token={{
            name: 'tokenPageStep3',
            value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ1'
          }}
        />
      </S.ContainerSize>
    </>
  )
}
