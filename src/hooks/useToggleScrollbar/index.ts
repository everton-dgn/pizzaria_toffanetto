import { useEffect } from 'react'

export const useToggleScrollbar = (isHidden: boolean): void => {
  useEffect(() => {
    const { style } = document.body
    if (isHidden) {
      style.overflow = 'hidden'
    }

    return () => {
      style.overflow = 'visible'
    }
  }, [isHidden])
}
