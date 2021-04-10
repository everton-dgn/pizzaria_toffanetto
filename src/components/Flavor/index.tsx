import React, { useContext, useEffect, useState } from 'react'
import * as S from 'components/Flavor/styles'
import { DataContext } from 'hooks/UseContext'
import { BtnNext } from 'components/BtnNext'
import Image from 'next/image'

interface FlavorProps {
  data: [
    {
      id: string
      img: string
      ingredients: string
      name: string
      points: string
      recommendation: boolean
      sizeAndPrice: [{ size: number; price: number; slices: number }]
    }
  ]
}

interface RecommendedCheckParams {
  e: any
  recommendation: boolean
  id: string
  points: string
  name: string
  size: number
}

export const Flavor = ({ data }: FlavorProps) => {
  const {
    pizza1,
    pizza2,
    pizza3,
    pizza4,
    setPizza1,
    setPizza2,
    setPizza3,
    setPizza4
  } = useContext(DataContext)

  const [
    verifyCheckedRecommendation,
    setVerifyCheckedRecommendation
  ] = useState([pizza1.checked, pizza2.checked, pizza3.checked, pizza4.checked])

  useEffect(() => {
    setVerifyCheckedRecommendation([
      pizza1.checked,
      pizza2.checked,
      pizza3.checked,
      pizza4.checked
    ])
  }, [pizza1, pizza2, pizza3, pizza4])

  const recommendedCheck = ({
    e,
    recommendation,
    id,
    points,
    name,
    size
  }: RecommendedCheckParams) => {
    switch (id) {
      case 'pizza1':
        setPizza1({
          checked: e.checked,
          recommended: recommendation,
          point: points,
          name: name,
          size: size
        })
        break
      case 'pizza2':
        setPizza2({
          checked: e.checked,
          recommended: recommendation,
          point: points,
          name: name,
          size: size
        })
        break
      case 'pizza3':
        setPizza3({
          checked: e.checked,
          recommended: recommendation,
          point: points,
          name: name,
          size: size
        })
        break
      case 'pizza4':
        setPizza4({
          checked: e.checked,
          recommended: recommendation,
          point: points,
          name: name,
          size: size
        })
        break
      default:
    }
  }

  const scrollBottom = () => {
    if (!verifyCheckedRecommendation.includes(true)) {
      let i = window.scrollY
      const int = setInterval(function () {
        window.scrollTo(0, i)
        i += 10
        if (i >= window.innerHeight) clearInterval(int)
      }, 20)
    }
  }

  return (
    <>
      <S.TitleComponent>Sabores</S.TitleComponent>
      <S.ContainerCard>
        {data.map((el, i) => (
          <S.Card
            key={el.id}
            onClick={scrollBottom}
            verifyCheck={verifyCheckedRecommendation[i]}
          >
            <S.ContainerCheckbox>
              <input
                type="checkbox"
                onClick={e =>
                  recommendedCheck({
                    e: e.target,
                    recommendation: el.recommendation,
                    id: el.id,
                    points: el.points,
                    name: el.name,
                    size: el.sizeAndPrice[i].size
                  })
                }
              />
            </S.ContainerCheckbox>
            <S.ContainerImg>
              <Image
                src={`/api-img/pizzas/${el.img}.jpg`}
                alt="Imagem de uma pizza"
                layout="fill"
                objectFit="cover"
                quality={80}
              />
            </S.ContainerImg>
            <S.ContainerInfo bonus={el.recommendation}>
              <S.Title>
                <b>PIZZA {el.name}</b> <em>(*Recomendação do dia)</em>
              </S.Title>
              <S.ContentInfo>
                <S.SubTitle>Ingredientes:</S.SubTitle>
                <S.Text>{el.ingredients}</S.Text>
              </S.ContentInfo>
            </S.ContainerInfo>
          </S.Card>
        ))}

        {verifyCheckedRecommendation.includes(true) && (
          <BtnNext route={'/etapa-2'} />
        )}
      </S.ContainerCard>
    </>
  )
}
