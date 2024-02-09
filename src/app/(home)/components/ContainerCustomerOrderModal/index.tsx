'use client'

import { memo } from 'react'

import { Modal } from 'components/molecules'

import { useGetProductFindById } from './hooks/useGetProductFindById'

import ContentCustomerOrderModal from '../ContentCustomerOrderModal'
import { SkeletonContentCustomerOrderModal } from '../ContentCustomerOrderModal/SkeletonContentCustomerOrderModal'
import FooterCustomerOrderModal from '../FooterCustomerOrderModal'
import { SkeletonFooterCustomerOrderModal } from '../FooterCustomerOrderModal/Skeleton'

const ContainerCustomerOrderModal = () => {
  const { product, isLoading } = useGetProductFindById()

  return (
    <Modal
      id="customer-order"
      fullscreenMobile
      maxWidth={600}
      titleHeader="Monte o seu Pedido"
      isCloseButton={false}
      footer={
        isLoading ? (
          <SkeletonFooterCustomerOrderModal />
        ) : (
          <FooterCustomerOrderModal />
        )
      }
    >
      {isLoading && <SkeletonContentCustomerOrderModal />}
      <ContentCustomerOrderModal product={product} />
    </Modal>
  )
}

export default memo(ContainerCustomerOrderModal)
