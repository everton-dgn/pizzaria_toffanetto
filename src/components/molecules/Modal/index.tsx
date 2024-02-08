'use client'

import { memo } from 'react'

import { clsx } from 'clsx'
import { CgClose as IconClose } from 'react-icons/cg'
import { HiOutlineChevronLeft as IconBack } from 'react-icons/hi'

import { IconButton, Portal } from 'components/atoms'

import { useModal } from './hooks/useModal'

import S from './styles.module.scss'

import type { ModalProps } from './types'

const TIME_TO_REMOVE_COMPONENT = 200

const Modal = ({
  title,
  description,
  children,
  maxWidth = 787,
  fullscreenMobile,
  isCloseButton = true,
  titleHeader,
  footer,
  className,
  id
}: ModalProps) => {
  const {
    handleHiddenComponent,
    isComponentRendered,
    modalRef,
    isVisible,
    btnCloseModalRef
  } = useModal({
    id,
    timeToRemoveComponent: TIME_TO_REMOVE_COMPONENT
  })

  if (!isComponentRendered) return null

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
            transition: `${TIME_TO_REMOVE_COMPONENT}ms cubic-bezier(0.4, 0, 0.2, 1)`
          }}
          onClick={handleHiddenComponent}
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
                onClick={handleHiddenComponent}
                ariaLabel="Voltar"
                icon={<IconBack color="#374151" size={24} />}
                className={clsx(S.icon_button_header, S.icon_left)}
                isTransparent
                isDisableTransform
                isDisableBoxShadow
                size="small"
              />
            )}
            {titleHeader && <h2 className={S.title_header}>{titleHeader}</h2>}
            {isCloseButton && (
              <IconButton
                ref={btnCloseModalRef}
                onClick={handleHiddenComponent}
                ariaLabel="Fechar Modal"
                icon={<IconClose color="#374151" size={24} />}
                className={clsx(S.icon_button_header, S.icon_right)}
                isTransparent
                isDisableTransform
                isDisableBoxShadow
                size="small"
              />
            )}
          </div>
          <div className={S.content}>
            {title}
            {description && <p className={S.description}>{description}</p>}
            {children}
          </div>
          {footer && <div className={S.footer}>{footer}</div>}
        </div>
      </div>
    </Portal>
  )
}

export default memo(Modal)
