import { ERROR_MESSAGES } from 'constants/errorMessages'

import { type ErrorApi } from 'data/errorApi/types'

export const errorApi = (e: ErrorApi): string => {
  const errorCode = e.response?.status

  if (errorCode === undefined) return ERROR_MESSAGES.GENERIC_ERROR
  if (errorCode >= 500) return ERROR_MESSAGES.ERROR_500
  if (errorCode === 403) return ERROR_MESSAGES.ERROR_403
  if (errorCode >= 400) return ERROR_MESSAGES.ERROR_400
  return ERROR_MESSAGES.GENERIC_ERROR
}
