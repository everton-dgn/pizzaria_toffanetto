import React, { useContext } from 'react'
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
      img: string
    }
  ]
}

export const Additional = ({ data }: AdditionalProps) => {
  const {
    adBacon,
    setAdBacon,
    adCalabreza,
    setAdCalabreza,
    adMussarela,
    setAdMussarela,
    adPalmito,
    setAdPalmito,
    // size,
    cart,
    setCart
  } = useContext(DataContext)

  const changeRemoveQtd = (id: string, price: number) => {
    switch (id) {
      case 'bacon':
        if (adBacon > 0) {
          setAdBacon(adBacon - 1)
          setCart(cart - price)
        }
        break
      case 'calabreza':
        if (adCalabreza > 0) {
          setAdCalabreza(adCalabreza - 1)
          setCart(cart - price)
        }
        break
      case 'mussarela':
        if (adMussarela > 0) {
          setAdMussarela(adMussarela - 1)
          setCart(cart - price)
        }
        break
      case 'palmito':
        if (adPalmito > 0) {
          setAdPalmito(adPalmito - 1)
          setCart(cart - price)
        }
        break
      default:
        break
    }
  }

  const changeAddQtd = (id: string, price: number) => {
    // verifica se já possui 10 itens adicionados e se verdadeiro não incrementa
    const total = adBacon + adCalabreza + adMussarela + adPalmito
    if (total === 10) return

    switch (id) {
      case 'bacon':
        setAdBacon(adBacon + 1)
        setCart(cart + price)
        break
      case 'calabreza':
        setAdCalabreza(adCalabreza + 1)
        setCart(cart + price)
        break
      case 'mussarela':
        setAdMussarela(adMussarela + 1)
        setCart(cart + price)
        break
      case 'palmito':
        setAdPalmito(adPalmito + 1)
        setCart(cart + price)
        break
      default:
        break
    }
  }

  const ConvertNumberToPrice = (param: number) => useCart(param)

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
                  <S.Title>{ConvertNumberToPrice(el.price)}</S.Title>
                </S.ContainerInfo>
                <S.AddItem>
                  <S.BtnCount onClick={() => changeRemoveQtd(el.id, el.price)}>
                    -
                  </S.BtnCount>
                  <input
                    type="number"
                    className="number"
                    value={[adBacon, adCalabreza, adMussarela, adPalmito][i]}
                    readOnly
                  />
                  <S.BtnCount onClick={() => changeAddQtd(el.id, el.price)}>
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
