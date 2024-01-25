import { mockDailyPizzaOptionsFindAll } from 'mocksApi/dailyPizzaOptions'

import { getHttpClient } from 'infra/http/getHttpClient'

import type {
  DailyPizzaOptionsFindAllType,
  DailyPizzaOptionsList
} from './types'

const ENDPOINT = '/pizzas/sizes-prices'
export const dailyPizzaOptionsFindAll =
  async (): Promise<DailyPizzaOptionsFindAllType> => {
    const { data, error } = await getHttpClient<DailyPizzaOptionsList>(
      ENDPOINT,
      mockDailyPizzaOptionsFindAll
    )
    return { data, error }
  }
