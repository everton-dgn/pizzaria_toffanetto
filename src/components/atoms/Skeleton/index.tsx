import { clsx } from 'clsx'

import type { SkeletonProps, VariantsType } from './types'

const variants: Record<VariantsType, string> = {
  text: 'rounded-4 h-16',
  circle: 'rounded-circle aspect-square',
  square: 'aspect-square'
}

export const Skeleton = ({ variant, count = 1, className }: SkeletonProps) => (
  <>
    {Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={clsx(
          'skeleton size-full',
          variant && variants[variant],
          className
        )}
      />
    ))}
  </>
)
