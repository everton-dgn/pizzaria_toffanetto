import type { ProductOptions } from 'infra/services/product/types'

import { product } from './mock'

export const mockProductFindById = {
  get: async (_endPoint: string): Promise<{ data: ProductOptions }> => {
    return await new Promise(resolve => {
      setTimeout(() => resolve({ data: product }), 200)
    })
  }
}
