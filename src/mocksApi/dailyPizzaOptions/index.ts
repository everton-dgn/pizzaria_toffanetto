import type { DailyPizzaOptionsList } from 'infra/services/pizzas/types'

import { dailyPizzaOptions } from './mock'

export const mockDailyPizzaOptionsFindAll = {
  get: async (_endPoint: string): Promise<{ data: DailyPizzaOptionsList }> => {
    return await new Promise(resolve => {
      setTimeout(() => resolve({ data: dailyPizzaOptions }), 500)
    })
  }
}
