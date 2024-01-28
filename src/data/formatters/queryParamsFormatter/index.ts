import { normalizeString } from '../normalizeString'

const INVALID_VALUES = [null, undefined, '']

const normalizeParams = (
  urlSearchParams: URLSearchParams,
  value: any,
  key: string
) => {
  if (typeof value === 'object') {
    urlSearchParams.append(key, normalizeString(JSON.stringify(value)))
  } else {
    urlSearchParams.append(key, normalizeString(value.toString()))
  }
}

export const queryParamsFormatter = (
  queryParams: Record<string, any>
): string => {
  const urlSearchParams = new URLSearchParams()

  Object.entries(queryParams || {}).forEach(([key, value]) => {
    if (!INVALID_VALUES.includes(value)) {
      normalizeParams(urlSearchParams, value, key)
    }
  })

  return urlSearchParams.toString()
}
