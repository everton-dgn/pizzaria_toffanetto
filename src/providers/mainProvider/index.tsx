'use client'

import type { ReactNode } from 'react'

import { enableReactTracking } from '@legendapp/state/config/enableReactTracking'

import type { MainProvidersProps } from './types'
import 'infra/store/configPersist'

enableReactTracking({ auto: true })

export const MainProvider = ({ children }: MainProvidersProps): ReactNode => (
  <>{children}</>
)
