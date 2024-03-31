import { Skeleton } from 'components/atoms'

const SkeletonSection = () => (
  <>
    <Skeleton className="h-16" />
    <div className="p-6 col-full g-4">
      <Skeleton variant="text" count={4} />
    </div>
  </>
)

export const SkeletonContentCustomerOrderModal = () => (
  <div className="col-full">
    <Skeleton className="mb-3 aspect-600/317 h-auto" />
    <div className="px-6 pb-6 col-full g-2">
      <Skeleton variant="text" className="my-3 h-6 w-44" />
      <div className="h-24 col-full g-2">
        <Skeleton variant="text" count={2} />
        <Skeleton variant="text" className="w-24" />
      </div>
    </div>
    <SkeletonSection />
    <SkeletonSection />
  </div>
)
