import { type ChangeEvent, type TextareaHTMLAttributes } from 'react'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  id?: string
  label?: string
  rows?: number
}
