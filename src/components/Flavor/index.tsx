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
      points: number
      recommendationDay: boolean
    }
  ]
}

export const Flavor = ({ data }: FlavorProps) => {
  const {
    flavor,
    setFlavor,
    setAccumulatedPoints,
    accumulatedPoints
  } = useContext(DataContext)

  const [disabledBtn, setDisabledBtn] = useState(true)
  const [borderCard, setBorderCard] = useState([false])

  // grava o objeto flavor com name e checked da api
  useEffect(() => {
    const flavorItems = data.map(el => {
      return { name: el.name, checked: false }
    })
    setFlavor(flavorItems)
  }, [])

  const punctuation = (i: number) => {
    if (flavor[i].checked === true && data[i].recommendationDay) {
      setAccumulatedPoints(accumulatedPoints + data[i].points)
    } else if (flavor[i].checked === false && data[i].recommendationDay) {
      setAccumulatedPoints(accumulatedPoints - data[i].points)
    }
  }

  const handleDisabledBtn = () => {
    const arrayBoolean = flavor.map((el: { checked: boolean }) => el.checked)

    arrayBoolean.every((el: boolean) => !el)
      ? setDisabledBtn(true)
      : setDisabledBtn(false)
  }

  const handleBorderCard = () => {
    setBorderCard(flavor.map((el: { checked: boolean }) => el.checked))
  }

  const changeFlavorChecked = (i: number, checked: boolean) => {
    const defineChecked = flavor
    defineChecked[i].checked = checked
    setFlavor(defineChecked)

    punctuation(i)
    handleDisabledBtn()
  }

  return (
    <>
      <S.TitleComponent>Sabores</S.TitleComponent>
      <S.ContainerCard>
        {data.map((el, i) => (
          <S.Card
            key={el.id}
            onClick={handleBorderCard}
            verifyCheck={borderCard[i]}
          >
            <S.ContainerCheckbox>
              <input
                type="checkbox"
                onClick={(e: any) => changeFlavorChecked(i, e.target.checked)}
              />
            </S.ContainerCheckbox>
            <S.ContainerImg>
              <Image
                src={`/api-img/pizzas/${el.img}.jpg`}
                alt="Imagem de uma pizza"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </S.ContainerImg>
            <S.ContainerInfo bonus={el.recommendationDay}>
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

        <BtnNext
          route={'/etapa-2'}
          disabled={disabledBtn}
          token={{
            name: 'tokenPageStep2',
            value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ0'
          }}
        />
      </S.ContainerCard>
    </>
  )
}
