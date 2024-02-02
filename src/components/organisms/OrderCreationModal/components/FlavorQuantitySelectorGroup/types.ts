import type { Flavor } from 'infra/services/product/types'

export type FlavorQuantitySelectorGroupProps = {
  options: Flavor['options']
}

export type FlavorQuantityType = {
  id: string
  product: string
  quantity: number
}

export type OnIncreaseProps = { id: string; product: string }
