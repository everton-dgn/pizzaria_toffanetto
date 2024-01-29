'use client'

import { forwardRef, memo, useImperativeHandle } from 'react'

import { clsx } from 'clsx'
import { CgClose as IconClose } from 'react-icons/cg'
import { HiOutlineChevronLeft as IconBack } from 'react-icons/hi'

import { IconButton, Portal } from 'components/atoms'

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
    isCloseButton = true,
    titleHeader,
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
          aria-labelledby={title}
          aria-modal={true}
        >
          <div className={S.header}>
            {!isCloseButton && (
              <IconButton
                ref={btnCloseModalRef}
                onClick={changeStateComponent}
                ariaLabel="Voltar"
                icon={<IconBack color="#374151" size={24} />}
                className={clsx(S.icon_button_header, S.icon_left)}
                isTransparent
                size="small"
              />
            )}
            {titleHeader && <h2 className={S.title_header}>{titleHeader}</h2>}
            {isCloseButton && (
              <IconButton
                ref={btnCloseModalRef}
                onClick={changeStateComponent}
                ariaLabel="Fechar Modal"
                icon={<IconClose color="#374151" size={24} />}
                className={clsx(S.icon_button_header, S.icon_right)}
                isTransparent
                size="small"
              />
            )}
          </div>
          <div className={S.content}>
            {title}
            {description && <p className={S.description}>{description}</p>}
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
})

export default memo(Modal)
