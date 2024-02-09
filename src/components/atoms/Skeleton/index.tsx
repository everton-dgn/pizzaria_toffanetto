import { clsx } from 'clsx'

import S from './styles.module.scss'

import type { SkeletonProps } from './types'

export const Skeleton = ({
  className,
  height,
  margin,
  width,
  borderRadius,
  aspectRatio
}: SkeletonProps) => {
  const calcMargin = margin
    ? margin
        .map(value => {
          if (typeof value === 'string') return value
          return `${value}px`
        })
        .join(' ')
    : 0

  return (
    <div
      className={clsx(S.container, className)}
      style={{
        borderRadius: borderRadius || 0,
        height: height || '100%',
        width: width || '100%',
        margin: calcMargin,
        aspectRatio: aspectRatio || 'auto'
      }}
    />
  )
}
