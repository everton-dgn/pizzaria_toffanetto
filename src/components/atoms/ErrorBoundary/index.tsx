'use client'

import type { ReactNode } from 'react'

import { ErrorBoundary as Error } from 'react-error-boundary'

export const ErrorBoundary = ({ children }: { children: ReactNode }) => (
  <Error
    fallback={<div>Ocorreu um erro, atualize a página para continuar!</div>}
  >
    {children}
  </Error>
)
