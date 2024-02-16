import { Skeleton } from 'components/atoms'

import S from './styles.module.scss'

export const SkeletonFooterCustomerOrderModal = () => (
  <div className={S.footer_modal}>
    <Skeleton width="90px" height="32px" className="rounded-32" />
    <Skeleton width="180px" height="32px" className="rounded-32" />
  </div>
)
