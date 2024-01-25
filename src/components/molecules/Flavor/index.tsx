'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

import { clsx } from 'clsx'
import { getStorage, setStorage } from 'utils/HandleSessionStorage'

import { Button } from 'components/atoms'

import { DataContext } from 'hooks/UseContext'

import S from './styles.module.scss'

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
  const { push } = useRouter()
  const { flavor, setFlavor, hasNetwork } = useContext(DataContext)

  useEffect(
    // @ts-expect-error
    () => getStorage('flavor') && setFlavor(getStorage('flavor')),
    [setFlavor]
  )

  useEffect(() => setStorage('flavor', flavor), [flavor])

  const getFlavorById = (id: string, data: [{ id: string }]) => {
    return data.find(el => el.id === id)
  }

  const changeFlavorChecked = (id: string) => {
    const currentFlavorClicked = getFlavorById(id, data)

    const verifyItemInFlavorClicked = getFlavorById(id, flavor)

    if (verifyItemInFlavorClicked) {
      // @ts-expect-error
      setFlavor(flavor.filter((el: { id: string }) => el.id !== id))
    } else {
      // @ts-expect-error
      setFlavor([...flavor, currentFlavorClicked])
    }
  }

  return (
    <>
      <h1 className={S.titleComponent}>Sabores</h1>
      <section className={S.containerCard}>
        {data.map(el => {
          const checked = !!getFlavorById(el.id, flavor)
          return (
            <label
              className={S.card}
              style={{ borderColor: checked ? '#34d399' : '#f5f5ff' }}
              key={el.id}
            >
              <div
                className={clsx(S.containerCheckbox, checked && S.verifyCheck)}
              >
                <img
                  src="/img/icons/checkbox.svg"
                  width="18"
                  height="17"
                  alt="Checkbox"
                  className={clsx(checked && S.hidden)}
                />
                <img
                  src="/img/icons/checkbox-checked.svg"
                  width="18"
                  height="18"
                  alt="Checkbox"
                  className={clsx(!checked && S.hidden)}
                />
                <input
                  type="checkbox"
                  onClick={() => changeFlavorChecked(el.id)}
                  defaultChecked={checked}
                />
              </div>
              <div className={S.containerImg}>
                {hasNetwork ? (
                  <Image
                    src={`/img/pizzas/${el.img}.jpg`}
                    alt="Imagem de uma pizza"
                    className={S.image}
                    sizes="100%"
                    fill
                    priority
                  />
                ) : (
                  <img
                    src={`/img/pizzas/${el.img}.jpg`}
                    alt="Imagem de uma pizza"
                    className={S.image}
                  />
                )}
              </div>
              <div
                className={clsx(
                  S.containerInfo,
                  el.recommendationDay && S.bonus
                )}
              >
                <h2 className={S.title}>
                  <b>PIZZA {el.name}</b> <em>(*Recomendação do dia)</em>
                </h2>
                <div className={S.contentInfo}>
                  <h3 className={S.subTitle}>Ingredientes:</h3>
                  <p className={S.text}>{el.ingredients}</p>
                </div>
              </div>
            </label>
          )
        })}

        <div className={S.wrapperBtn}>
          <Button label="VOLTAR" onClick={() => push('/')} />
          <div className={S.space} />
          <Button
            onClick={() => push('/checkout/segunda-etapa')}
            disabled={flavor.length === 0}
            label="AVANÇAR"
          />
        </div>
      </section>
    </>
  )
}
