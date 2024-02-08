import type { ReactNode } from 'react'

export type SectionProductProps = {
  children: ReactNode
  title: string
  description?: string
  isRequired: boolean
  isDone: boolean
}
