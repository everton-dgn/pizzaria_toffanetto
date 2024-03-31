'use client'

import { memo } from 'react'

import { clsx } from 'clsx'
import { CgClose as IconClose } from 'react-icons/cg'
import { HiOutlineChevronLeft as IconBack } from 'react-icons/hi'

import { IconButton, Portal } from 'components/atoms'

import { useModal } from './hooks/useModal'

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
        className={clsx(
          'fixed z-overlay flex size-full backdrop-blur-[2px] t-0 l-0',
          fullscreenMobile ? 'p-0' : 'p-4'
        )}
        ref={modalRef}
      >
        <div
          className={clsx(
            'absolute flex size-full t-0 l-0',
            isVisible ? 'bg-dark/60 visible' : 'bg-transparent/0 hidden'
          )}
          style={{
            transition: `${TIME_TO_REMOVE_COMPONENT}ms cubic-bezier(0.4, 0, 0.2, 1)`
          }}
          onClick={handleHiddenComponent}
        />
        <div
          className={clsx(
            'z-modal m-auto max-h-full bg-white shadow-xxl col-full sm:h-fit sm:max-h-fit sm:br-2xl',
            isVisible
              ? 'visible translate-y-0 sm:opacity-[1]'
              : 'hidden translate-y-full sm:opacity-[0.6]',
            fullscreenMobile
              ? 'h-max min-h-full br-0 sm:h-fit sm:min-h-fit'
              : 'h-fit min-h-fit br-2xl'
          )}
          style={{
            maxWidth: `${maxWidth}px`,
            transition: 'all 0.3s cubic-bezier(0, 0.55, 0.45, 1)'
          }}
          role="dialog"
          aria-labelledby={title}
          aria-modal={true}
        >
          <div className="relative z-header h-10 min-h-10 w-full shadow-sm center f-wrap row">
            {!isCloseButton && (
              <IconButton
                ref={btnCloseModalRef}
                onClick={handleHiddenComponent}
                ariaLabel="Voltar"
                icon={<IconBack color="#374151" size={24} />}
                className="absolute t-0 l-3"
                isTransparent
                isDisableTransform
                isDisableBoxShadow
                size="small"
              />
            )}
            {titleHeader && (
              <h2 className="px-14 uppercase fs-base-semibold">
                {titleHeader}
              </h2>
            )}
            {isCloseButton && (
              <IconButton
                ref={btnCloseModalRef}
                onClick={handleHiddenComponent}
                ariaLabel="Fechar Modal"
                icon={<IconClose color="#374151" size={24} />}
                className="absolute t-0 r-3"
                isTransparent
                isDisableTransform
                isDisableBoxShadow
                size="small"
              />
            )}
          </div>
          <div className="h-full col-full ovy-auto sm:max-h-[80vh]">
            {title}
            {description && (
              <p className="mt-2 fs-base sm:mt-4">{description}</p>
            )}
            {children}
          </div>
          {footer && <div className="z-base col-full center">{footer}</div>}
        </div>
      </div>
    </Portal>
  )
}

export default memo(Modal)
