'use client'

import { memo, useCallback } from 'react'

import { clsx } from 'clsx'
import {
  MdClose as IconClose,
  MdCheckCircleOutline as IconSuccess,
  MdOutlineCancel as IconError,
  MdInfoOutline as IconInfo,
  MdWarningAmber as IconWarning
} from 'react-icons/md'

import { useGlobalToast } from 'infra/store/toast'

import S from './styles.module.scss'

import type { IconProps } from './types'

const TOAST_ANIMATION_TIME = 500

const Icon = memo(({ status }: IconProps) => {
  const iconClasses = clsx('size-20 min-h-20 min-w-20', S[`icon--${status}`])

  const iconMap = {
    success: <IconSuccess className={iconClasses} data-testid="icon-success" />,
    error: <IconError className={iconClasses} data-testid="icon-error" />,
    warning: <IconWarning className={iconClasses} data-testid="icon-warning" />,
    info: <IconInfo className={iconClasses} data-testid="icon-info" />
  }

  return iconMap[status]
})

const Toast = () => {
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

  return stateToast.toastList.length > 0 ? (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed right-16 top-72 z-always-on-top ml-16 h-fit w-[100%-32px] max-w-full col xs:max-w-[320px]"
    >
      {stateToast.toastList.map(
        ({ status, description, id, animationClass }) => (
          <div
            key={id}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            className={clsx(
              'relative mb-12 h-fit overflow-hidden rounded-8 bg-white px-8 pb-12 pt-8 shadow-lg row-full',
              S[animationClass]
            )}
          >
            <div className="grow p-6 row g-12">
              <Icon status={status} />
              <div className="grow col">
                <p className="pr-20 text-14 font-600 text-grey-dark">
                  {description}
                </p>
              </div>
            </div>
            <button
              aria-label="Fechar alerta"
              onClick={() => handleClickRemoveToast(id)}
              className="absolute right-0 top-0 flex size-[38px] min-h-[38px] min-w-[38px] cursor-pointer rounded-4 border-0 bg-transparent center"
            >
              <IconClose className="size-20 min-h-20 min-w-20 fill-grey-dark" />
            </button>
            <span
              className={clsx(
                'absolute bottom-0 left-0 block h-4 w-full',
                S.progress,
                S[`progress--${status}`]
              )}
            />
          </div>
        )
      )}
    </div>
  ) : null
}

export default memo(Toast)
