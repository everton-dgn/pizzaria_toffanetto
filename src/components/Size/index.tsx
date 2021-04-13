import React, { ChangeEvent, useContext, useState } from 'react'
import * as S from 'components/Size/styles'
import { DataContext } from 'hooks/UseContext'
import { BtnNext } from 'components/BtnNext'
import { useCart } from 'hooks/UseCart'
import Image from 'next/image'

interface SizeProps {
  data: {
    pizzas: [
      {
        id: string
        img: string
        ingredients: string
        name: string
        points: string
        recommendationDay: string
      }
    ]
    sizesAndPrices: [
      {
        size: string
        price: number
        slices: number
      }
    ]
  }
}

export const Size = ({ data }: SizeProps) => {
  const { setSize, setCart } = useContext(DataContext)

  const [selectedValue, setSelectedValue] = useState('')

  const addCart = (price: number, size: string) => {
    setSize({ price: price, size: size })
    setCart(price)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const ConvertToPrice = (price: number) => useCart(price)

  const scrollBottom = () => {
    let i = window.scrollY
    const int = setInterval(function () {
      window.scrollTo(0, i)
      i += 10
      if (i >= window.innerHeight) clearInterval(int)
    }, 20)
  }

  return (
    <>
      <S.TitleComponent>Tamanhos</S.TitleComponent>
      <S.ContainerSize>
        {data.sizesAndPrices.map(el => (
          <S.Card
            key={el.size}
            onClick={scrollBottom}
            verifyCheck={selectedValue === el.size}
          >
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
                    <S.SubTitle>
                      <Image
                        src="/img/icons/slice-pizza.svg"
                        alt="Imagem de uma pizza"
                        width={24}
                        height={25}
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

        {selectedValue && <BtnNext route={'/etapa-3'} />}
      </S.ContainerSize>
    </>
  )
}
