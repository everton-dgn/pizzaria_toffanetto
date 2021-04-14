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

  const [verifyChecked, setVerifyChecked] = useState([false])

  // grava o objeto flavor com name e checked da api
  useEffect(() => {
    const flavorItems = data.map(el => {
      return { name: el.name, checked: false }
    })
    setFlavor(flavorItems)
  }, [])

  const verifyCheckedFlavor = () => {
    const verify = flavor.map((el: { checked: boolean }) => el.checked)
    setVerifyChecked(verify)
  }

  const scrollBottom = () => {
    if (!verifyChecked.includes(true)) {
      let i = window.scrollY
      const int = setInterval(function () {
        window.scrollTo(0, i)
        i += 10
        if (i >= window.innerHeight) clearInterval(int)
      }, 20)
    }
  }

  const punctuation = (i: number) => {
    if (flavor[i].checked === true && data[i].recommendationDay) {
      setAccumulatedPoints(accumulatedPoints + data[i].points)
    } else if (flavor[i].checked === false && data[i].recommendationDay) {
      setAccumulatedPoints(accumulatedPoints - data[i].points)
    }
  }

  const changeFlavorChecked = (i: number, checked: boolean) => {
    const defineChecked = flavor
    defineChecked[i].checked = checked
    setFlavor(defineChecked)

    verifyCheckedFlavor()
    punctuation(i)
  }

  return (
    <>
      <S.TitleComponent>Sabores</S.TitleComponent>
      <S.ContainerCard>
        {data.map((el, i) => (
          <S.Card
            key={el.id}
            onClick={scrollBottom}
            verifyCheck={flavor[i]?.checked}
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
                quality={80}
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

        {verifyChecked.includes(true) && <BtnNext route={'/etapa-2'} />}
      </S.ContainerCard>
    </>
  )
}
