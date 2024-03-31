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
      className="t-18 fixed z-always-on-top ml-4 h-fit w-[100%-32px] max-w-full col r-4 xs:max-w-80"
    >
      {stateToast.toastList.map(
        ({ status, description, id, animationClass }) => (
          <div
            key={id}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            className={clsx(
              'relative mb-3 h-fit bg-white px-2 pb-3 pt-2 shadow-lg br-lg ov-hidden row-full',
              animation[animationClass]
            )}
          >
            <div className="grow p-1.5 g-3 row">
              <Icon status={status} />
              <div className="grow col">
                <p className="pr-5 fs-sm-semibold-grey-dark">{description}</p>
              </div>
            </div>
            <button
              aria-label="Fechar alerta"
              onClick={() => handleClickRemoveToast(id)}
              className="absolute flex cursor-pointer bg-transparent br bw-0 t-0 r-0 center min-size-10"
            >
              <IconClose className="fill-grey-dark min-size-5" />
            </button>
            <span
              className={clsx(
                'absolute block h-1 w-full animate-[progress_7s_linear_forwards] b-0 l-0',
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
