import { useCallback, useEffect, useState } from 'react'

export const useAnimationRender = ({
  timeToRemoveComponent = 0,
  defaultRendered = false
}) => {
  const [isComponentRendered, setIsComponentRendered] =
    useState(defaultRendered)
  const [isVisible, setIsVisible] = useState(defaultRendered)

  useEffect(() => {
    if (isComponentRendered) setIsVisible(true)
  }, [isComponentRendered])

  const showComponent = useCallback(() => {
    setIsComponentRendered(true)
  }, [])

  const hideComponent = useCallback(() => {
    setIsVisible(false)
    const timeoutId = setTimeout(() => {
      setIsComponentRendered(false)
    }, timeToRemoveComponent)
    return () => clearTimeout(timeoutId)
  }, [timeToRemoveComponent])

  return {
    isComponentRendered,
    isVisible,
    showComponent,
    hideComponent
  }
}
