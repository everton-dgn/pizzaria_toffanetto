'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

import { Button } from 'components/atoms'

import { DataContext } from 'hooks/UseContext'

import type { DailyPizzaOptionsList } from 'infra/services/pizzas/types'

import S from './styles.module.scss'

interface CardSquareProps {
  data: DailyPizzaOptionsList
}

const CardsSquare = ({ data }: CardSquareProps) => {
  const { push } = useRouter()
  const { hasNetwork } = useContext(DataContext)

  return (
    <div className={S.containerCards}>
      {data?.map(el => (
        <div className={S.card} key={el.id}>
          <div className={S.containerImg}>
            {hasNetwork ? (
              <Image
                src={`/img/pizzas/${el.img}.jpg`}
                alt="Imagem de uma pizza"
                className={S.image}
                sizes="100%"
                fill
              />
            ) : (
              <img
                src={`/img/pizzas/${el.img}.jpg`}
                alt="Imagem de uma pizza"
                className={S.image}
                fetchPriority="low"
                loading="lazy"
              />
            )}
          </div>
          <div className={S.containerInfo}>
            <h2 className={S.title}>PIZZA {el.name}</h2>
            {el.recommendationDay && (
              <em className={S.recommendation}>*Recomendação do dia</em>
            )}
            <div className={S.contentInfo}>
              <h3 className={S.subTitle}>Ingredientes:</h3>
              <p className={S.text}>{el.ingredients}</p>
            </div>
            <Button
              className={S.buttonCard}
              onClick={() => push('/checkout/primeira-etapa')}
              label="SELECIONAR"
              isFullWidth
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardsSquare
