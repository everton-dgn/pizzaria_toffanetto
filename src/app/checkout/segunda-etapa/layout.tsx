import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Etapa 2'
}

const HomeLayout = ({ children }: { children: ReactNode }) => <>{children}</>

export default HomeLayout
