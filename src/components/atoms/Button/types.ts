import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  ariaLabel?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
  isFullWidth?: boolean
  size?: 'small' | 'medium' | 'large'
}
