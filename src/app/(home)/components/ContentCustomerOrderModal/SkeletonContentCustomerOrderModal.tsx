import { Skeleton } from 'components/atoms'

const SkeletonSection = () => (
  <>
    <Skeleton height="70px" />
    <div className="col-full gap-16 px-24 pt-24 pb-24">
      <Skeleton variant="text" count={4} />
    </div>
  </>
)

export const SkeletonContentCustomerOrderModal = () => (
  <div className="col-full">
    <Skeleton className="mb-12 h-auto" aspectRatio="600/317" />
    <div className="col-full gap-8 px-24 pb-24">
      <Skeleton variant="text" className="my-12" width="174px" height="24px" />
      <div className="col-full gap-8 h-100">
        <Skeleton variant="text" count={2} />
        <Skeleton variant="text" width="100px" />
      </div>
    </div>
    <SkeletonSection />
    <SkeletonSection />
  </div>
)
