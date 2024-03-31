'use client'

import { forwardRef } from 'react'

import { clsx } from 'clsx'

import S from './styles.module.css'

import type { IconButtonProps } from './types'

const btnSize = {
  small: 'p-2',
  medium: 'p-3'
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
        'flex size-fit translate-y-0 bg-secondary-500 transition-all duration-150 ease-linear center',
        S.button,
        btnSize[size],
        isTransparent && S.transparent,
        isDisableBoxShadow && S.box_shadow,
        isDisableTransform && S.transform,
        isCircle ? 'br-circle' : 'br-2',
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  )
)
