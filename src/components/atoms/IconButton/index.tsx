'use client'

import { clsx } from 'clsx'

import S from './styles.module.scss'

import type { IconButtonProps } from './types'

export const IconButton = ({
  icon,
  className,
  ariaLabel,
  size = 'medium',
  ...props
}: IconButtonProps) => (
  <button
    className={clsx(S.button, S[`button_size--${size}`], className)}
    aria-label={ariaLabel}
    {...props}
  >
    {icon}
  </button>
)
