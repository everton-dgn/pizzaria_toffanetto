export type VariantsType = 'square' | 'circle' | 'text'

export interface SkeletonProps {
  variant?: VariantsType
  className?: string
  count?: number
}
