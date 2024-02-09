import { Skeleton } from 'components/atoms'

const SkeletonSection = () => (
  <>
    <Skeleton width="100%" height="70px" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '8px',
        padding: '8px 24px 24px 24px'
      }}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <Skeleton
          key={i}
          height="16px"
          borderRadius="4px"
          margin={[i === 0 ? 8 : 4, 0, 4, 0]}
        />
      ))}
    </div>
  </>
)

export const SkeletonContentCustomerOrderModal = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }}
  >
    <Skeleton height="auto" aspectRatio="600/317" margin={[0, 0, 12, 0]} />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '8px',
        padding: '0 24px 24px 24px'
      }}
    >
      <Skeleton
        width="174px"
        height="24px"
        margin={[12, 0, 12, 0]}
        borderRadius="4px"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '8px',
          height: '100%'
        }}
      >
        <Skeleton height="16px" borderRadius="4px" />
        <Skeleton height="16px" borderRadius="4px" />
        <Skeleton width="100px" height="16px" borderRadius="4px" />
      </div>
    </div>
    <SkeletonSection />
    <SkeletonSection />
  </div>
)
