'use client'

import { Fragment, useState } from 'react'

import { QuantityCounterButton } from 'components/molecules'

import { converterNumberToCurrency } from 'data/formatters'

import S from './styles.module.scss'

import type {
  FlavorQuantitySelectorGroupProps,
  FlavorQuantityType,
  OnIncreaseProps
} from './types'

export const FlavorQuantitySelectorGroup = ({
  options
}: FlavorQuantitySelectorGroupProps) => {
  const [flavorQuantity, setFlavorQuantity] = useState<FlavorQuantityType[]>([])

  const onDecrease = (id: string) => {
    setFlavorQuantity(currentFlavor => {
      const updatedFlavor = currentFlavor.map(flavor => {
        if (flavor.id === id && flavor.quantity > 0) {
          return { ...flavor, quantity: flavor.quantity - 1 }
        }
        return flavor
      })
      return updatedFlavor.filter(flavor => flavor.quantity > 0)
    })
  }

  const onIncrease = ({ id, product }: OnIncreaseProps) => {
    setFlavorQuantity(currentFlavor => {
      const flavorExists = currentFlavor.some(flavor => flavor.id === id)
      if (flavorExists) {
        return currentFlavor.map(flavor =>
          flavor.id === id
            ? { ...flavor, quantity: flavor.quantity + 1 }
            : flavor
        )
      } else {
        return [...currentFlavor, { id, product, quantity: 1 }]
      }
    })
  }

  const calcQuantityById = (id: string) => {
    const quantity = flavorQuantity.find(flavor => flavor.id === id)?.quantity
    return quantity ?? 0
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
                  quantity={calcQuantityById(option.id)}
                  onDecrease={() => onDecrease(option.id)}
                  onIncrease={() =>
                    onIncrease({ id: option.id, product: option.name })
                  }
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
