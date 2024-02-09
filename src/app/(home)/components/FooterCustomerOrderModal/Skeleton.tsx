import { Skeleton } from 'components/atoms'

import S from './styles.module.scss'

export const SkeletonFooterCustomerOrderModal = () => (
  <div className={S.footer_modal}>
    <Skeleton width="90px" height="32px" borderRadius="32px" />
    <Skeleton width="180px" height="32px" borderRadius="32px" />
  </div>
)
