'use client'

import { Fragment } from 'react'

import { QuantityCounterButton } from 'components/molecules'

import { converterNumberToCurrency } from 'data/formatters'
import { useCustomerOrder } from 'infra/store/customerOrder'

import S from './styles.module.scss'

import type { FlavorQuantitySelectorGroupProps, OnIncreaseProps } from './types'

export const FlavorQuantitySelectorGroup = ({
  options
}: FlavorQuantitySelectorGroupProps) => {
  const { stateCustomerOrder } = useCustomerOrder()

  const onDecrease = (id: string) => {
    const updatedFlavor = stateCustomerOrder.flavorOptions?.map(flavor => {
      if (flavor.id === id && flavor.quantity > 0) {
        return { ...flavor, quantity: flavor.quantity - 1 }
      }
      return flavor
    })
    const filteredFlavors = updatedFlavor?.filter(flavor => flavor.quantity > 0)
    stateCustomerOrder.setFlavorOptions(filteredFlavors ?? [])
  }

  const onIncrease = ({ id, name, price }: OnIncreaseProps) => {
    const flavorExists = stateCustomerOrder.flavorOptions?.some(
      flavor => flavor.id === id
    )
    if (flavorExists) {
      const updatedFlavors = stateCustomerOrder.flavorOptions?.map(flavor =>
        flavor.id === id ? { ...flavor, quantity: flavor.quantity + 1 } : flavor
      )
      stateCustomerOrder.setFlavorOptions(updatedFlavors ?? [])
    } else {
      const updateFlavors = [
        ...(stateCustomerOrder?.flavorOptions ?? []),
        { id, name, quantity: 1, price }
      ]
      stateCustomerOrder.setFlavorOptions(updateFlavors ?? [])
    }
  }

  const calcQuantityById = (id: string) => {
    const quantity = stateCustomerOrder.flavorOptions?.find(
      flavor => flavor.id === id
    )?.quantity
    return quantity ?? 0
  }

  return (
    <>
      {options.map((option, i) => {
        const lastItem = i === options.length - 1
        const price = stateCustomerOrder.sizeOptions
          ? option.sizePricing[stateCustomerOrder.sizeOptions.name]
          : 0
        const formattedPrice = converterNumberToCurrency({
          value: price,
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
                    onIncrease({ id: option.id, name: option.name, price })
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