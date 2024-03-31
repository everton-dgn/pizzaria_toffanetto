import { Skeleton } from 'components/atoms'

export const SkeletonFooterCustomerOrderModal = () => (
  <div className="px-4 py-[3px] shadow-sm ai-center bc-neutral-light-lavender bw-t f-wrap g-4 jc-between row-full">
    <Skeleton className="br-5 h-8 w-24" />
    <Skeleton className="br-5 h-8 w-44" />
  </div>
)
