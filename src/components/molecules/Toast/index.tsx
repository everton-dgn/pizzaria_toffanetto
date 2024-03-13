'use client'

import { memo } from 'react'

import { clsx } from 'clsx'
import { MdClose as IconClose } from 'react-icons/md'

import { useControllerToast } from './hooks/useControllerToast'

import { Icon } from './components/Icon'

const animation = {
  fade_enter: 'animate-[toast-in_0.5s_ease-in-out_forwards]',
  fade_exit:
    'animate-[toast-out_0.5s_cubic-bezier(0.36,_-0.64,_0.34,_1.76)_forwards]'
}

const progressStatusBgColor = {
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  info: 'bg-info'
}

const Toast = () => {
  const { stateToast, handleClickRemoveToast } = useControllerToast()

  return stateToast.toastList.length > 0 ? (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed z-always-on-top ml-16 h-fit w-[100%-32px] max-w-full col r-16 t-72 xs:max-w-[320px]"
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
              animation[animationClass]
            )}
          >
            <div className="grow p-6 row g-12">
              <Icon status={status} />
              <div className="grow col">
                <p className="fw-600 pr-20 text-grey-dark fs-14">
                  {description}
                </p>
              </div>
            </div>
            <button
              aria-label="Fechar alerta"
              onClick={() => handleClickRemoveToast(id)}
              className="absolute flex size-[38px] min-h-[38px] min-w-[38px] cursor-pointer rounded-4 border-0 bg-transparent center t-0 r-0"
            >
              <IconClose className="size-20 min-h-20 min-w-20 fill-grey-dark" />
            </button>
            <span
              className={clsx(
                'absolute block h-4 w-full animate-[progress_7s_linear_forwards] b-0 l-0',
                progressStatusBgColor[status]
              )}
            />
          </div>
        )
      )}
    </div>
  ) : null
}

export default memo(Toast)
