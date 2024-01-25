import { useCallback } from 'react'

// eslint-disable-next-line import/named
import { v4 as uuidv4 } from 'uuid'

import useGlobalToast from 'infra/store/toast'

import { type Status } from './types'

const TOAST_DISPLAY_TIME = 7000
const TOAST_ANIMATION_TIME = 500

export const useToast = () => {
  const { stateToast } = useGlobalToast()

  const createToast = useCallback(
    (status: Status) => (description: string) => {
      const id = uuidv4()
      stateToast.setToastList({
        id,
        description,
        status,
        animationClass: 'fade_enter'
      })

      setTimeout(() => {
        stateToast.setUpdateToast(id)
        setTimeout(() => {
          stateToast.setRemoveToast(id)
        }, TOAST_ANIMATION_TIME)
      }, TOAST_DISPLAY_TIME)
    },
    [stateToast]
  )

  return {
    error: createToast('error'),
    success: createToast('success'),
    warning: createToast('warning'),
    info: createToast('info')
  }
}
