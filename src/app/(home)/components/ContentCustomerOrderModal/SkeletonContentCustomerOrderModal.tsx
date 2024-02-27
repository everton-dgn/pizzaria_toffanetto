import { Skeleton } from 'components/atoms'

const SkeletonSection = () => (
  <>
    <Skeleton className="h-[70px]" />
    <div className="gap-16 p-24 col-full">
      <Skeleton variant="text" count={4} />
    </div>
  </>
)

export const SkeletonContentCustomerOrderModal = () => (
  <div className="col-full">
    <Skeleton className="h-auto mb-12 aspect-600/317" />
    <div className="gap-8 px-24 pb-24 col-full">
      <Skeleton variant="text" className="my-12 h-24 w-[174px]" />
      <div className="h-100 gap-8 col-full">
        <Skeleton variant="text" count={2} />
        <Skeleton variant="text" className="w-[100px]" />
      </div>
    </div>
    <SkeletonSection />
    <SkeletonSection />
  </div>
)
