'use client'

import { forwardRef, memo, useImperativeHandle } from 'react'

import { clsx } from 'clsx'
import { MdClose as IconClose } from 'react-icons/md'

import { Portal } from 'components/atoms'

import { useModal } from './hooks/useModal'

import S from './styles.module.scss'

import type { ModalHandle, ModalProps } from './types'

const timeMilSecToRemoveComponent = 200

const Modal = forwardRef<ModalHandle, ModalProps>((props, ref) => {
  const {
    title,
    description,
    children,
    maxWidth = 787,
    fullscreenMobile,
    className
  } = props

  const {
    changeStateComponent,
    isRenderComponent,
    modalRef,
    isVisible,
    btnCloseModalRef
  } = useModal({
    timeMilSecToRemoveComponent
  })

  useImperativeHandle(ref, () => ({
    toggleVisibility: () => {
      changeStateComponent()
    }
  }))

  if (!isRenderComponent) return null

  return (
    <Portal>
      <div
        className={clsx(S.container, className)}
        style={{ padding: fullscreenMobile ? 0 : '16px' }}
        ref={modalRef}
        aria-labelledby="modal-title"
      >
        <div
          className={clsx(
            S.overlay,
            isVisible ? S.show_overlay : S.hidden_overlay
          )}
          style={{
            transition: `${timeMilSecToRemoveComponent}ms cubic-bezier(0.4, 0, 0.2, 1)`
          }}
          onClick={changeStateComponent}
        />
        <div
          className={clsx(S.modal, isVisible ? S.show_modal : S.hidden_modal)}
          style={{
            maxWidth: `${maxWidth}px`,
            borderRadius: fullscreenMobile ? 0 : '16px',
            height: fullscreenMobile ? 'max-content' : 'fit-content',
            minHeight: fullscreenMobile ? '100%' : 'fit-content'
          }}
          role="dialog"
          aria-labelledby="Modal"
          aria-modal={true}
        >
          <div className={S.wrapper_close_button}>
            <button
              onClick={changeStateComponent}
              ref={btnCloseModalRef}
              aria-label="Fechar Modal"
              className={S.button_close}
            >
              <IconClose className={S.icon_close} />
            </button>
          </div>
          <div className={S.content}>
            {title && <h2 className={S.title}>{title}</h2>}
            {description && <p className={S.description}>{description}</p>}
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
})

export default memo(Modal)
