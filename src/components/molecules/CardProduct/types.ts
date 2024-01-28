import type { ProductItems } from 'infra/services/availableProducts/types'

export interface CardProductProps extends ProductItems {
  category: string
}
