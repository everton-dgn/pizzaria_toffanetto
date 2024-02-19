import { Skeleton } from 'components/atoms'

export const SkeletonFooterCustomerOrderModal = () => (
  <div className="flex-wrap gap-16 border-t border-neutral-light-lavender px-16 py-12 shadow-sm jc-between ai-center row-full">
    <Skeleton width="90px" height="32px" className="rounded-32" />
    <Skeleton width="180px" height="32px" className="rounded-32" />
  </div>
)
