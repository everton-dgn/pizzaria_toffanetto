import { useCallback, useEffect, useRef } from 'react'

import { useAnimationRender, useToggleScrollbar } from 'hooks'

import { useModalById } from 'infra/store/modalById'

const FOCUSABLE_ELEMENTS =
  'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"]), iframe, audio[controls], video[controls], [contenteditable="true"]'

export const useModal = ({ id = '', timeToRemoveComponent = 0 }) => {
  const { stateModalById } = useModalById()
  const { isComponentRendered, isVisible, showComponent, hideComponent } =
    useAnimationRender({ timeToRemoveComponent })
  const modalRef = useRef<HTMLDivElement>(null)
  const btnCloseModalRef = useRef<HTMLButtonElement>(null)
  const lastFocusedElementRef = useRef<HTMLElement | null>(null)
  const lastFocusedElement = lastFocusedElementRef.current
  const modal = modalRef.current
  useToggleScrollbar(isVisible)

  useEffect(() => {
    if (stateModalById.id === id) return showComponent()
    return () => stateModalById.setShowModal('')
  }, [id, showComponent, stateModalById])

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
        const focusableElementsModal =
          modal.querySelectorAll(FOCUSABLE_ELEMENTS)
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

  const handleHiddenComponent = useCallback(() => {
    hideComponent()
    stateModalById.setShowModal('')
  }, [hideComponent, stateModalById])

  return {
    isComponentRendered,
    isVisible,
    showComponent,
    handleHiddenComponent,
    modalRef,
    btnCloseModalRef
  }
}
