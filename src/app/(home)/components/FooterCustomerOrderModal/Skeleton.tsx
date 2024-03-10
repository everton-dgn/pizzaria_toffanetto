import { Skeleton } from 'components/atoms'

export const SkeletonFooterCustomerOrderModal = () => (
  <div className="flex-wrap border-t border-neutral-light-lavender px-16 py-12 shadow-sm jc-between ai-center row-full g-16">
    <Skeleton className="h-32 w-[90px] rounded-20" />
    <Skeleton className="h-32 w-[180px] rounded-20" />
  </div>
)
