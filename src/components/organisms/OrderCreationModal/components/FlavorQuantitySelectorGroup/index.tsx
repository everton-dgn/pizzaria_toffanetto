'use client'

import { Fragment, useState } from 'react'

import { QuantityCounterButton } from 'components/molecules'

import { converterNumberToCurrency } from 'data/formatters'

import S from './styles.module.scss'

import type { FlavorQuantitySelectorGroupProps } from './types'

export const FlavorQuantitySelectorGroup = ({
  options
}: FlavorQuantitySelectorGroupProps) => {
  const [quantity, setQuantity] = useState(0)

  const onDecrease = () => {
    if (quantity > 0) setQuantity(quantity => quantity - 1)
  }

  const onIncrease = () => {
    setQuantity(quantity => quantity + 1)
  }

  const sizeStore = 'mini' // TODO: pegar da store

  return (
    <>
      {options.map((option, i) => {
        const lastItem = i === options.length - 1
        const formattedPrice = converterNumberToCurrency({
          value: option.sizePricing[sizeStore],
          setsCurrencySymbol: true
        })
        return (
          <Fragment key={option.id}>
            <div className={S.container}>
              <div className={S.flavor}>
                <h4 className={S.flavor_title}>{option.name}</h4>
                <p className={S.flavor_description}>{option.description}</p>
              </div>
              <div className={S.wrapper_quantity_price}>
                <QuantityCounterButton
                  quantity={quantity}
                  onDecrease={onDecrease}
                  onIncrease={onIncrease}
                  isContractible
                />
                <p className={S.price}>{formattedPrice}</p>
              </div>
            </div>
            {!lastItem && <hr className="separator-x" />}
          </Fragment>
        )
      })}
    </>
  )
}
