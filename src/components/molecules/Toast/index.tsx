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

import useGlobalToast from 'infra/store/toast'

import S from './styles.module.scss'

import type { IconProps } from './types'

const TOAST_ANIMATION_TIME = 500

const Icon = memo(({ status }: IconProps) => {
  const iconClasses = clsx(S.icon, S[`icon--${status}`])

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
    <div aria-live="polite" aria-atomic="true" className={S.container}>
      {stateToast.toastList.map(
        ({ status, description, id, animationClass }) => (
          <div
            key={id}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            className={clsx(S.toast, S[animationClass])}
          >
            <div className={S.toast_info}>
              <Icon status={status} />
              <div className={S.wrapper_text}>
                <p className={S.description}>{description}</p>
              </div>
            </div>
            <button
              aria-label="Fechar alerta"
              onClick={() => handleClickRemoveToast(id)}
              className={S.button_close}
            >
              <IconClose className={S.icon_close} />
            </button>
            <span className={clsx(S.progress, S[`progress--${status}`])} />
          </div>
        )
      )}
    </div>
  ) : null
}

export default memo(Toast)
