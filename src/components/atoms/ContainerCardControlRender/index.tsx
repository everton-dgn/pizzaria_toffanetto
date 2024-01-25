'use client'

import { type ReactNode, useRef } from 'react'

import { useLazyLoadWithIntersectionObserver } from 'hooks/useLazyLoadWithIntersectionObserver'

import S from './styles.module.scss'

interface ContainerCCRProps {
  children: ReactNode
  minHeight?: number
}

export const ContainerCardControlRender = ({
  children,
  minHeight
}: ContainerCCRProps) => {
  const renderRef = useRef<HTMLDivElement>(null)

  const { showComponent } = useLazyLoadWithIntersectionObserver(renderRef, {
    distancePXWindowCallComponent: 0
  })

  return (
    <div
      className={S.wrapper}
      ref={renderRef}
      style={{ minHeight: minHeight ? minHeight + 'px' : 'min-content' }}
    >
      {showComponent && children}
    </div>
  )
}
