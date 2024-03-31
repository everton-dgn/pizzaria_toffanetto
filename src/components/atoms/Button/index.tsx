'use client'

import { clsx } from 'clsx'
import { GoSync as IconSync } from 'react-icons/go'

import type { ButtonProps } from './types'

const btn =
  'flex ai-center jc-center br-2 bg-secondary-500 fw-bold shadow-[0_4px_16px_#aeaebed4] transition-all duration-150  ease-linear hover:translate-y-[-1.5px] hover:shadow-[0_5px_18px_#aeaebed4] active:translate-y-[1.5px] active:shadow-[0_1px_3px_#aeaebed4] disabled:cursor-not-allowed disabled:bg-secondary-500 disabled:shadow-[0_4px_16px_#aeaebed4]'

const btnSize = {
  small: 'py-px px-3 g-1 fs-xs',
  medium: 'py-3 px-7 g-3 fs-sm',
  large: 'py-4 px-10 g-3 fs-base'
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
