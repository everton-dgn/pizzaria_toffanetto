import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  children: ReactNode
  size?: 'small' | 'medium'
}
