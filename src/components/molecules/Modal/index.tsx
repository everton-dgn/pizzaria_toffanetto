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
          'fixed left-0 top-0 z-overlay flex size-full backdrop-blur-[2px]',
          fullscreenMobile ? 'p-0' : 'p-16'
        )}
        ref={modalRef}
      >
        <div
          className={clsx(
            'absolute left-0 top-0 flex size-full',
            isVisible
              ? 'visible bg-dark opacity-[0.6]'
              : 'hidden bg-transparent opacity-0'
          )}
          style={{
            transition: `${TIME_TO_REMOVE_COMPONENT}ms cubic-bezier(0.4, 0, 0.2, 1)`
          }}
          onClick={handleHiddenComponent}
        />
        <div
          className={clsx(
            'z-modal m-auto max-h-full bg-white shadow-xxl col-full sm:h-fit sm:max-h-fit sm:rounded-16',
            isVisible
              ? 'visible translate-y-0 sm:opacity-[1]'
              : 'hidden translate-y-full sm:opacity-[0.6]',
            fullscreenMobile
              ? 'h-max min-h-full rounded-0 sm:h-fit sm:min-h-fit'
              : 'h-fit min-h-fit rounded-16'
          )}
          style={{
            maxWidth: `${maxWidth}px`,
            transition: 'all 0.3s cubic-bezier(0, 0.55, 0.45, 1)'
          }}
          role="dialog"
          aria-labelledby={title}
          aria-modal={true}
        >
          <div className="relative z-header h-40 min-h-40 w-full flex-wrap shadow-sm center row">
            {!isCloseButton && (
              <IconButton
                ref={btnCloseModalRef}
                onClick={handleHiddenComponent}
                ariaLabel="Voltar"
                icon={<IconBack color="#374151" size={24} />}
                className="absolute left-12 top-0"
                isTransparent
                isDisableTransform
                isDisableBoxShadow
                size="small"
              />
            )}
            {titleHeader && (
              <h2 className="px-[54px] text-16 font-600 uppercase">
                {titleHeader}
              </h2>
            )}
            {isCloseButton && (
              <IconButton
                ref={btnCloseModalRef}
                onClick={handleHiddenComponent}
                ariaLabel="Fechar Modal"
                icon={<IconClose color="#374151" size={24} />}
                className="absolute right-12 top-0"
                isTransparent
                isDisableTransform
                isDisableBoxShadow
                size="small"
              />
            )}
          </div>
          <div className="h-full overflow-y-auto col-full sm:max-h-[80vh]">
            {title}
            {description && (
              <p className="mt-8 text-16 sm:mt-16">{description}</p>
            )}
            {children}
          </div>
          {footer && <div className="z-base center col-full">{footer}</div>}
        </div>
      </div>
    </Portal>
  )
}

export default memo(Modal)
