import { Skeleton } from 'components/atoms'

export const SkeletonFooterCustomerOrderModal = () => (
  <div className="flex-wrap gap-16 border-t border-neutral-light-lavender px-16 py-12 shadow-sm jc-between ai-center row-full">
    <Skeleton className="h-32 w-[90px] rounded-32" />
    <Skeleton className="h-32 w-[180px] rounded-32" />
  </div>
)
