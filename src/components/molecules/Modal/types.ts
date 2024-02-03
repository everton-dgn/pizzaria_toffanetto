import { type ReactNode } from 'react'

export interface ModalHandle {
  show: () => void
  hidden: () => void
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
  footer?: ReactNode
}
