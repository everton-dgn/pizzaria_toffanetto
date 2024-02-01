import type { Flavor, SizeValues } from 'infra/services/product/types'

export type FlavorQuantitySelectorGroupProps = {
  options: Flavor['options']
}

export type SelectedValueType = SizeValues | null
