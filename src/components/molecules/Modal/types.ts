import { type ReactNode } from 'react'

export interface ModalProps {
  id: string
  children?: ReactNode
  description?: ReactNode
  fullscreenMobile?: boolean
  maxWidth?: number
  title?: string
  titleHeader?: string
  isCloseButton?: boolean
  footer?: ReactNode
}
