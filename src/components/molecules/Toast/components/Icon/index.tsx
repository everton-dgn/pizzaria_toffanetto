import { memo } from 'react'

import { clsx } from 'clsx'
import {
  MdCheckCircleOutline as IconSuccess,
  MdInfoOutline as IconInfo,
  MdOutlineCancel as IconError,
  MdWarningAmber as IconWarning
} from 'react-icons/md'

import type { IconProps } from '../../types'

const icon = {
  success: 'fill-success',
  error: 'fill-error',
  warning: 'fill-warning',
  info: 'fill-info'
}

export const Icon = memo(({ status }: IconProps) => {
  const iconClasses = clsx('min-size-5', icon[status])

  const iconMap = {
    success: <IconSuccess className={iconClasses} data-testid="icon-success" />,
    error: <IconError className={iconClasses} data-testid="icon-error" />,
    warning: <IconWarning className={iconClasses} data-testid="icon-warning" />,
    info: <IconInfo className={iconClasses} data-testid="icon-info" />
  }

  return iconMap[status]
})
