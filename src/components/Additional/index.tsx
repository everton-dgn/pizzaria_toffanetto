import React, { useContext, useEffect } from 'react'
import * as S from 'components/Additional/styles'
import { DataContext } from 'hooks/UseContext'

interface AdditionalProps {
  data: [
    {
      id: string
      name: string
      price: string
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
    size,
    setCart
  } = useContext(DataContext)

  const changeRemoveQtd = (param: string) => {
    switch (param) {
      case 'bacon':
        adBacon > 0 && setAdBacon(adBacon - 1)
        break
      case 'calabreza':
        adCalabreza > 0 && setAdCalabreza(adCalabreza - 1)
        break
      case 'mussarela':
        adMussarela > 0 && setAdMussarela(adMussarela - 1)
        break
      case 'palmito':
        adPalmito > 0 && setAdPalmito(adPalmito - 1)
        break
      default:
        break
    }
  }

  useEffect(() => {
    const total = adBacon + adCalabreza + adMussarela + adPalmito
    setCart((+size[0] * 100 + 4.99 * 100 * total) / 100)
  }, [adBacon, adCalabreza, adMussarela, adPalmito, setCart, size])

  const changeAddQtd = (param: string) => {
    const total = adBacon + adCalabreza + adMussarela + adPalmito
    if (total === 10) return

    switch (param) {
      case 'bacon':
        setAdBacon(adBacon + 1)
        break
      case 'calabreza':
        setAdCalabreza(adCalabreza + 1)
        break
      case 'mussarela':
        setAdMussarela(adMussarela + 1)
        break
      case 'palmito':
        setAdPalmito(adPalmito + 1)
        break
      default:
        break
    }
  }

  return (
    <>
      <S.TitleComponent>Adicionais</S.TitleComponent>
      <S.ContainerMain>
        {data.map((el, i) => (
          <S.Card key={el.id}>
            <S.ContainerAdditional>
              <S.Box>
                <S.BoxImg>
                  <img
                    src={`/api-img/additionals/${el.img}.jpg`}
                    alt={el.name}
                  />
                </S.BoxImg>
                <S.ContainerInfo>
                  <S.Title>{el.name}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>(200g / Porção)</S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>R$ {el.price}</S.Title>
                </S.ContainerInfo>
                <S.AddItem>
                  <S.BtnCount onClick={() => changeRemoveQtd(el.id)}>
                    -
                  </S.BtnCount>
                  <input
                    type="number"
                    className="number"
                    value={[adBacon, adCalabreza, adMussarela, adPalmito][i]}
                    readOnly
                  />
                  <S.BtnCount onClick={() => changeAddQtd(el.id)}>+</S.BtnCount>
                </S.AddItem>
              </S.Box>
            </S.ContainerAdditional>
          </S.Card>
        ))}
      </S.ContainerMain>
    </>
  )
}
