import { mockProductFindById } from 'mocksApi/product'

import { getHttpClient } from 'infra/http/getHttpClient'

import type { ProductFindByIdType, ProductOptions } from './types'

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
