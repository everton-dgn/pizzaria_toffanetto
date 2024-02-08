import { mockAvailableProductsFindAll } from 'mocksApi/availableProducts'

import { getHttpClient } from 'infra/http/getHttpClient'

const ENDPOINT = '/available-products'
export const availableProductsFindAll =
  async (): Promise<AvailableProductsFindAllType> => {
    const { data, error } = await getHttpClient<AvailableProducts>(
      ENDPOINT,
      mockAvailableProductsFindAll
    )
    return { data, error }
  }
