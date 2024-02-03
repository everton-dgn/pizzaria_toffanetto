import type { ButtonHTMLAttributes } from 'react'

export interface CartButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}
