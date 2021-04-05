import { ChangeEvent, useContext, useState } from 'react'
import * as S from 'components/Size/styles'
import { DataContext } from 'hooks/UseContext'
import { BtnNext } from 'components/BtnNext'

interface SizeProps {
  data: [
    {
      id: string
      img: string
      ingredients: string
      name: string
      points: string
      recommendation: string
      sizeAndPrice: [
        {
          size: string
          price: string
          slices: string
        }
      ]
    }
  ]
}

export const Size = ({ data }: SizeProps) => {
  const { setSize, setCart } = useContext(DataContext)
  const [selectedValue, setSelectedValue] = useState('')

  const addCart = (price: string, size: string) => {
    setSize([price, size])
    setCart(price)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <>
      <S.TitleComponent>Tamanhos</S.TitleComponent>
      <S.ContainerSize>
        {data[0].sizeAndPrice.map(el => (
          <S.Card key={el.size}>
            <S.ContainerRadio>
              <S.RadioContent>
                <S.RadioLabel>
                  <input
                    type="radio"
                    onClick={() => addCart(el.price, el.size)}
                    checked={selectedValue === el.size}
                    onChange={handleChange}
                    value={el.size}
                    name={el.size}
                  />
                </S.RadioLabel>
                <S.ContainerInfo>
                  <S.Title>Pizza {el.size}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>({el.slices} Fatias)</S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>R$ {el.price}</S.Title>
                </S.ContainerInfo>
              </S.RadioContent>
            </S.ContainerRadio>
          </S.Card>
        ))}

        {selectedValue && <BtnNext route={'/etapa-3'} />}
      </S.ContainerSize>
    </>
  )
}
