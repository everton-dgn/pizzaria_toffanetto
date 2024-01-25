'use client'

import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

import { clsx } from 'clsx'
import { getStorage, setStorage } from 'utils/HandleSessionStorage'

import { Button } from 'components/atoms'

import { useCart } from 'hooks/UseCart'
import { DataContext } from 'hooks/UseContext'

import S from './styles.module.scss'

interface SizeProps {
  sizes: [
    {
      size: string
      price: number
      slices: number
    }
  ]
}

export const Size = ({ sizes }: SizeProps) => {
  const { push } = useRouter()
  const { size, setSize, setCart } = useContext(DataContext)
  // @ts-expect-error
  useEffect(() => getStorage('size') && setSize(getStorage('size')), [setSize])

  const addCart = (price: number) => {
    // @ts-expect-error
    setCart(price)
    setStorage('cart', price)
  }

  const handleSizeChecked = (price: number, currentSize: string) => {
    const sizeAndPrice = { price, size: currentSize }
    // @ts-expect-error
    setSize(sizeAndPrice)

    setStorage('size', sizeAndPrice)

    addCart(price)
  }

  const ConvertToPrice = (price: number) => useCart(price)

  return (
    <>
      <h1 className={S.titleComponent}>Tamanhos</h1>
      <section className={S.containerSize}>
        {sizes.map(el => (
          <label
            className={S.card}
            style={{
              // @ts-expect-error
              borderColor: size.size !== el.size ? '#f5f5ff' : '#7f1d1d'
            }}
            key={el.size}
          >
            <div className={S.containerRadio}>
              <div className={S.radioContent}>
                <div className={S.radioLabel}>
                  <img
                    src="/img/icons/radio.svg"
                    width="18"
                    height="18"
                    alt="Checkbox"
                    className={clsx(
                      // @ts-expect-error
                      size.size === el.size && S.hidden
                    )}
                  />
                  <img
                    src="/img/icons/radio-checked.svg"
                    width="18"
                    height="18"
                    alt="Checkbox"
                    className={clsx(
                      // @ts-expect-error
                      size.size !== el.size && S.hidden
                    )}
                  />
                  <input
                    type="radio"
                    checked={
                      // @ts-expect-error
                      size.size === el.size
                    }
                    onChange={() => handleSizeChecked(el.price, el.size)}
                    value={el.size}
                    name={el.size}
                  />
                </div>
                <div className={S.containerInfo}>
                  <h3 className={S.title}>Pizza {el.size}</h3>
                  <div className={S.contentInfo}>
                    <h4 className={S.subTitle}>
                      <img
                        src="/img/icons/slice-pizza.svg"
                        alt="Imagem de uma pizza"
                        width="24"
                        height="25"
                      />
                      ({el.slices} Fatias)
                    </h4>
                  </div>
                  <h3 className={S.title}>{ConvertToPrice(el.price)}</h3>
                </div>
              </div>
            </div>
          </label>
        ))}

        <div className={S.wrapperBtn}>
          <Button
            label="VOLTAR"
            onClick={() => push('/checkout/primeira-etapa')}
          />
          <div className={S.space} />
          <Button
            onClick={() => push('/checkout/terceira-etapa')}
            disabled={
              // @ts-expect-error
              !size.size
            }
            label="AVANÇAR"
          />
        </div>
      </section>
    </>
  )
}
