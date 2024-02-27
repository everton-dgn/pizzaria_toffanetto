'use client'

import { forwardRef } from 'react'

import { clsx } from 'clsx'

import S from './styles.module.css'

import type { IconButtonProps } from './types'

const btnSize = {
  small: 'p-8',
  medium: 'p-12'
}

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
        btnSize[size],
        isTransparent && S.transparent,
        isDisableBoxShadow && S.box_shadow,
        isDisableTransform && S.transform,
        isCircle ? 'rounded-circle' : 'rounded-8',
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  )
)
