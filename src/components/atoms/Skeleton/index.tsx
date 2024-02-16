import { clsx } from 'clsx'

import S from './styles.module.scss'

import type { SkeletonProps } from './types'

export const Skeleton = ({
  variant,
  height,
  width,
  aspectRatio,
  count = 1,
  className
}: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={clsx(
            S.container,
            variant === 'text' && 'rounded-4 h-16',
            variant === 'circle' && 'rounded-circle aspect-square',
            variant === 'square' && 'aspect-square',
            className
          )}
          style={{
            height: height || '100%',
            width: width || '100%',
            ...(variant === 'text'
              ? {}
              : { aspectRatio: aspectRatio || 'auto' })
          }}
        />
      ))}
    </>
  )
}
