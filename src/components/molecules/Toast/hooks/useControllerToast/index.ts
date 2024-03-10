import { useCallback } from 'react'

import { useGlobalToast } from 'infra/store/toast'

const TOAST_ANIMATION_TIME = 500

export const useControllerToast = () => {
  const { stateToast } = useGlobalToast()

  const handleClickRemoveToast = useCallback(
    (id: string) => {
      stateToast.setUpdateToast(id)
      setTimeout(() => {
        stateToast.setRemoveToast(id)
      }, TOAST_ANIMATION_TIME)
    },
    [stateToast]
  )

  return { stateToast, handleClickRemoveToast }
}
