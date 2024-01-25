import { httpClient } from 'libs'

import { errorApi } from 'data'
import { type ErrorApi } from 'data/errorApi/types'

import { type GetHttpClientType } from './types'

export const getHttpClient = async <T>(
  endPoint: string,
  http = httpClient as any
): Promise<GetHttpClientType<T>> => {
  try {
    const { data } = await http.get(endPoint)
    return { data, error: '' }
  } catch (e) {
    return { data: null, error: errorApi(e as ErrorApi) }
  }
}
