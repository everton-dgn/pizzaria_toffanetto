import type { ReactElement } from 'react'

import { clsx } from 'clsx'
import {
  MdOutlineInfo as IconInfo,
  MdOutlineErrorOutline as IconError,
  MdWarningAmber as IconWarning,
  MdDone as IconSuccess
} from 'react-icons/md'

import type { InfoMessageProps, TypeMessage } from './types'

const sizes = {
  small: 'g-1 [&>svg]:size-4 [&>span]:fs-xs',
  medium: 'g-2 [&>svg]:size-5 [&>span]:fs-sm'
}

const types = {
  error: 'tx-error [&>path]:fill-error',
  info: 'tx-info [&>path]:fill-info',
  success: 'fill-success [&>path]:tx-success',
  warning: 'fill-warning [&>path]:tx-warning'
}

const icons: Record<TypeMessage, ReactElement> = {
  error: <IconError role="img" />,
  info: <IconInfo role="img" />,
  success: <IconSuccess role="img" />,
  warning: <IconWarning role="img" />
}

export const InfoMessage = ({
  type,
  size = 'medium',
  message
}: InfoMessageProps) => (
  <div
    className={clsx(
      'flex bg-none ai-center as-start g-1',
      types[type],
      sizes[size]
    )}
    role="alert"
  >
    {icons[type]}
    <span className="message fw-semibold">{message}</span>
  </div>
)
