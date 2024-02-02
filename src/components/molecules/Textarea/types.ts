import { type TextareaHTMLAttributes } from 'react'

export type TextareaProps = {
  error?: string
  id?: string
  label?: string
  rows?: number
} & TextareaHTMLAttributes<HTMLTextAreaElement>
