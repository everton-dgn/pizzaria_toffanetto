'use client'

import { clsx } from 'clsx'
import { GoSync as IconSync } from 'react-icons/go'

import type { ButtonProps } from './types'

const btn =
  'flex items-center justify-center rounded-8 bg-secondary-500 fw-700 shadow-[0_4px_16px_#aeaebed4] transition-all duration-150  ease-linear hover:translate-y-[-1.5px] hover:shadow-[0_5px_18px_#aeaebed4] active:translate-y-[1.5px] active:shadow-[0_1px_3px_#aeaebed4] disabled:cursor-not-allowed disabled:bg-secondary-500 disabled:shadow-[0_4px_16px_#aeaebed4]'

const btnSize = {
  small: 'py-4 px-12 g-4 fs-12',
  medium: 'py-12 px-28 g-12 fs-14',
  large: 'py-16 px-40 g-12 fs-16'
}

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
      btn,
      isFullWidth ? 'w-full' : 'max-w-fit',
      btnSize[size],
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
