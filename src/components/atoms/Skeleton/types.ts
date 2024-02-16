export type VariantsType = 'square' | 'circle' | 'text'

export interface SkeletonProps {
  variant?: VariantsType
  className?: string
  height?: string
  width?: string
  aspectRatio?: string
  count?: number
}
