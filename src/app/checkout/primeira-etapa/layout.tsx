import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Etapa 1'
}

const HomeLayout = ({ children }: { children: ReactNode }) => <>{children}</>

export default HomeLayout