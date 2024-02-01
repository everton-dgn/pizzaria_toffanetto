import type { Size, SizeValues } from 'infra/services/product/types'

export type SizeRadioButtonGroupProps = {
  options: Size['options']
}

export type SelectedValueType = SizeValues | null
