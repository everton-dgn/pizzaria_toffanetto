import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  icon: ReactNode
  size?: 'small' | 'medium'
  isTransparent?: boolean
  isCircle?: boolean
}
