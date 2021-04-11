import React, { useContext, useEffect } from 'react'
import * as S from 'components/Additional/styles'
import { DataContext } from 'hooks/UseContext'
import { useCart } from 'hooks/UseCart'
import Image from 'next/image'

interface AdditionalProps {
  data: [
    {
      id: string
      name: string
      price: number
      qtd: number
      qtdMax: number
      img: string
    }
  ]
}

interface AdditionalQtdProps {
  qtd: number
  price: number
}

export const Additional = ({ data }: AdditionalProps) => {
  const { cart, setCart, additionals, setAdditionals } = useContext(DataContext)

  // popula o estado com o objeto additionals da api
  useEffect(() => setAdditionals(data), [])

  const sumQtdAdditionals = (price: number) => {
    setCart(cart + price)
  }

  const removeAdditional = (additional: AdditionalQtdProps) => {
    additional.qtd = additional.qtd - 1
    sumQtdAdditionals(-additional.price)
  }

  const AddAdditional = (additional: AdditionalQtdProps) => {
    additional.qtd = additional.qtd + 1
    sumQtdAdditionals(additional.price)
  }

  const ConvertNumberToCurrency = (param: number) => useCart(param)

  return (
    <>
      <S.TitleComponent>Adicionais</S.TitleComponent>
      <S.ContainerMain>
        {data.map((el, i) => (
          <S.Card key={el.id}>
            <S.ContainerAdditional>
              <S.Box>
                <S.BoxImg>
                  <Image
                    src={`/api-img/additionals/${el.img}.jpg`}
                    alt={el.name}
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                  />
                </S.BoxImg>

                <S.ContainerInfo>
                  <S.Title>{el.name}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>(200g / Porção)</S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>{ConvertNumberToCurrency(el.price)}</S.Title>
                </S.ContainerInfo>

                <S.AddItem>
                  <S.BtnCount
                    onClick={() => removeAdditional(additionals[i])}
                    disabled={additionals[i]?.qtd === 0}
                  >
                    -
                  </S.BtnCount>

                  <input
                    type="number"
                    className="number"
                    value={additionals[i]?.qtd || 0}
                    readOnly
                  />

                  <S.BtnCount
                    onClick={() => AddAdditional(additionals[i])}
                    disabled={additionals[i]?.qtd === additionals[i]?.qtdMax}
                  >
                    +
                  </S.BtnCount>
                </S.AddItem>
              </S.Box>
            </S.ContainerAdditional>
          </S.Card>
        ))}
      </S.ContainerMain>
    </>
  )
}
