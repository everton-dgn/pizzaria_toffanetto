import type { ReactElement } from 'react'

import { clsx } from 'clsx'
import {
  MdOutlineInfo as IconInfo,
  MdOutlineErrorOutline as IconError,
  MdWarningAmber as IconWarning,
  MdDone as IconSuccess
} from 'react-icons/md'

import S from './styles.module.css'

import type { InfoMessageProps, TypeMessage } from './types'

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
    className={clsx('flex gap-4 bg-none ai-center', S.container, type, size)}
    role="alert"
  >
    {icons[type]}
    <span className="font-600">{message}</span>
  </div>
)
