import { type ReactNode } from 'react'

export interface ModalHandle {
  toggleVisibility: () => void
}

export interface ModalProps {
  children?: ReactNode
  className?: string
  description?: ReactNode
  fullscreenMobile?: boolean
  maxWidth?: number
  title?: string
  titleHeader?: string
  isCloseButton?: boolean
}
