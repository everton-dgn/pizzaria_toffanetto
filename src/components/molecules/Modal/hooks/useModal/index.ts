import { useEffect, useRef } from 'react'

import { useAnimationRender, useToggleScrollbar } from 'hooks'

export const useModal = ({ timeToRemoveComponent = 0 }) => {
  const { isComponentRendered, isVisible, showComponent, hideComponent } =
    useAnimationRender({ timeToRemoveComponent })
  const modalRef = useRef<HTMLDivElement>(null)
  const btnCloseModalRef = useRef<HTMLButtonElement>(null)
  const lastFocusedElementRef = useRef<HTMLElement | null>(null)
  const lastFocusedElement = lastFocusedElementRef.current
  const modal = modalRef.current
  useToggleScrollbar(isVisible)

  useEffect(() => {
    if (isVisible) {
      lastFocusedElementRef.current = document.activeElement as HTMLElement
    }
  }, [isVisible])

  useEffect(() => {
    const returnsFocusToLastFocusedElement = setTimeout(() => {
      if (!isVisible) lastFocusedElement?.focus()
    }, timeToRemoveComponent)

    return () => {
      clearTimeout(returnsFocusToLastFocusedElement)
    }
  }, [isVisible, lastFocusedElement, timeToRemoveComponent])

  useEffect(() => {
    if (isVisible) {
      const addFocusFirstElementModal = setTimeout(
        () => btnCloseModalRef.current?.focus(),
        timeToRemoveComponent
      )

      return () => {
        clearTimeout(addFocusFirstElementModal)
      }
    }
  }, [isVisible, timeToRemoveComponent])

  // eslint-disable-next-line sonarjs/cognitive-complexity
  useEffect(() => {
    const handleKeyDown = (e: {
      key: string
      preventDefault: () => void
      shiftKey: boolean
    }) => {
      const isPressEsc = e.key === 'Escape'
      const isPressTab = e.key === 'Tab'

      if (isPressEsc) hideComponent()

      if (isPressTab && modal) {
        const focusableElementsModal = modal.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        )
        const firstElementModal = focusableElementsModal[0] as HTMLElement
        const lastElementModal = focusableElementsModal[
          focusableElementsModal.length - 1
        ] as HTMLElement

        const hasFocusableElementsModal = focusableElementsModal.length > 0
        const isLastElementActiveAndNotShiftKey =
          document.activeElement === lastElementModal && !e.shiftKey
        const isFirstElementActiveAndShiftKey =
          document.activeElement === firstElementModal && e.shiftKey

        if (hasFocusableElementsModal && isLastElementActiveAndNotShiftKey) {
          e.preventDefault()
          firstElementModal.focus()
        }

        if (hasFocusableElementsModal && isFirstElementActiveAndShiftKey) {
          e.preventDefault()
          lastElementModal.focus()
        }

        if (!hasFocusableElementsModal) e.preventDefault()
      }
    }

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [hideComponent, isVisible, modal])

  return {
    isComponentRendered,
    isVisible,
    showComponent,
    hideComponent,
    modalRef,
    btnCloseModalRef
  }
}
