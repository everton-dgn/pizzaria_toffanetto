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
  small: 'g-4 [&>svg]:size-16 [&>span]:fs-12',
  medium: 'g-8 [&>svg]:size-20 [&>span]:fs-14'
}

const types = {
  error: 'text-error [&>path]:fill-error',
  info: 'text-info [&>path]:fill-info',
  success: 'fill-success [&>path]:text-success',
  warning: 'fill-warning [&>path]:text-warning'
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
      'flex bg-none g-4 ai-center as-start',
      types[type],
      sizes[size]
    )}
    role="alert"
  >
    {icons[type]}
    <span className="message fw-600">{message}</span>
  </div>
)
