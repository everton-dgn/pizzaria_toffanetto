import { clsx } from 'clsx'

import S from './styles.module.scss'

import type { SkeletonProps, VariantsType } from './types'

const variants: Record<VariantsType, string> = {
  text: 'rounded-4 h-16',
  circle: 'rounded-circle aspect-square',
  square: 'aspect-square'
}

export const Skeleton = ({
  variant,
  height,
  width,
  aspectRatio,
  count = 1,
  className
}: SkeletonProps) => {
  const defaultStyles = {
    aspectRatio: aspectRatio ?? 'auto',
    width: width ?? '100%',
    height: height ?? '100%'
  }
  const variantsStyles = {
    ...(aspectRatio && { aspectRatio }),
    ...(width && { width }),
    ...(height && { height })
  }
  const styles = variant ? variantsStyles : defaultStyles

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={clsx(S.container, variant && variants[variant], className)}
          style={styles}
        />
      ))}
    </>
  )
}
