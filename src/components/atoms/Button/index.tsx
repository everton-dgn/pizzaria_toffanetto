'use client'

import { clsx } from 'clsx'
import { GoSync as IconSync } from 'react-icons/go'

import S from './styles.module.scss'

import type { ButtonProps } from './types'

export const Button = ({
  label,
  leftIcon,
  rightIcon,
  isLoading,
  className,
  ariaLabel,
  disabled,
  isFullWidth,
  size = 'medium',
  ...props
}: ButtonProps) => (
  <button
    className={clsx(
      S.button,
      isFullWidth && S.full_width,
      S[`button_size--${size}`],
      className
    )}
    aria-label={ariaLabel || label}
    disabled={isLoading || disabled}
    {...props}
  >
    {isLoading ? (
      <>
        <IconSync /> Aguarde...
      </>
    ) : (
      <>
        {leftIcon}
        {label}
        {rightIcon}
      </>
    )}
  </button>
)
