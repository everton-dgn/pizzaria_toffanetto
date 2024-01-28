import type { AvailableProducts } from 'infra/services/availableProducts/types'

import { availableProducts } from './mock'

export const mockAvailableProductsFindAll = {
  get: async (_endPoint: string): Promise<{ data: AvailableProducts }> => {
    return await new Promise(resolve => {
      setTimeout(() => resolve({ data: availableProducts }), 200)
    })
  }
}
