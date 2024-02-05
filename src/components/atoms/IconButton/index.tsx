'use client'

import { forwardRef } from 'react'

import { clsx } from 'clsx'

import S from './styles.module.scss'

import type { IconButtonProps } from './types'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      className,
      ariaLabel,
      size = 'medium',
      isTransparent,
      isCircle,
      isDisableBoxShadow = false,
      isDisableTransform = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        S.button,
        S[`button_size--${size}`],
        isTransparent && S.transparent,
        isCircle && S.circle,
        isDisableBoxShadow && S.box_shadow,
        isDisableTransform && S.transform,
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  )
)
