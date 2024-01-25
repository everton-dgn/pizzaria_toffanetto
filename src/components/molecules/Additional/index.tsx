// @ts-nocheck
'use client'

import Image from 'next/image'
import { useContext, useEffect } from 'react'

import { setStorage } from 'utils/HandleSessionStorage'

import { useCart } from 'hooks/UseCart'
import { DataContext } from 'hooks/UseContext'

import S from './styles.module.scss'

import type { AdditionalProps } from './types'

export const Additional = ({ data }: AdditionalProps) => {
  const { hasNetwork, cart, setCart, additionals, setAdditionals } =
    useContext(DataContext)

  useEffect(() => {
    setAdditionals(data)
  }, [data, setAdditionals])

  useEffect(() => {
    setStorage('additionals', additionals)
    setStorage('cart', cart)
  }, [additionals, cart])

  const sumQtdAdditionals = (price: number) => {
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    setCart(cart + price)
  }

  const ConvertNumberToCurrency = (param: number) => useCart(param)

  const removeAdditional = (i: number) => {
    const changeAdditionals = additionals
    // @ts-expect-error
    changeAdditionals[i].qtd = changeAdditionals[i].qtd - 1
    // @ts-expect-error
    sumQtdAdditionals(-changeAdditionals[i].price)
  }

  const addAdditional = (i: number) => {
    const changeAdditionals = additionals
    // @ts-expect-error
    changeAdditionals[i].qtd = changeAdditionals[i].qtd + 1
    // @ts-expect-error
    setAdditionals(changeAdditionals)

    // @ts-expect-error
    sumQtdAdditionals(changeAdditionals[i].price)
  }

  return (
    <>
      <h1 className={S.titleComponent}>Adicionais</h1>
      <section className={S.containerMain}>
        {data.map((el, i) => (
          <div className={S.card} key={el.id}>
            <div className={S.containerAdditional}>
              <div className={S.box}>
                <div className={S.boxImg}>
                  {hasNetwork ? (
                    <Image
                      src={`/img/additionals/${el.img}.jpg`}
                      alt={el.name}
                      className={S.image}
                      sizes="100%"
                      fill
                      priority
                    />
                  ) : (
                    <img
                      src={`/img/additionals/${el.img}.jpg`}
                      alt={el.name}
                      className={S.image}
                    />
                  )}
                </div>

                <div className={S.containerInfo}>
                  <h3 className={S.title}>{el.name}</h3>
                  <div className={S.contentInfo}>
                    <h3 className={S.subTitle}>(200g / Porção)</h3>
                  </div>
                  <h3 className={S.title}>
                    {ConvertNumberToCurrency(el.price)}
                  </h3>
                </div>

                <div className={S.addItem}>
                  <button
                    className={S.btnCount}
                    onClick={() => removeAdditional(i)}
                    disabled={additionals[i]?.qtd === 0}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={additionals[i]?.qtd || 0}
                    readOnly
                  />

                  <button
                    className={S.btnCount}
                    onClick={() => addAdditional(i)}
                    disabled={additionals[i]?.qtd === additionals[i]?.qtdMax}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
