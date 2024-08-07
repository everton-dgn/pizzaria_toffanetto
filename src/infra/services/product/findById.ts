import { mockProductFindById } from 'mocksApi/product'

import { getHttpClient } from 'infra/http/getHttpClient'

const ENDPOINT = (id: string) => `/product/${id}`

export const productFindById = async (
  id: string
): Promise<ProductFindByIdType> => {
  const { data, error } = await getHttpClient<ProductOptions>(
    ENDPOINT(id),
    mockProductFindById
  )
  return { data, error }
}
