'use client'

import { memo } from 'react'

import { CartButton } from 'components/atoms'
import { Modal, QuantityCounterButton } from 'components/molecules'

import S from './styles.module.scss'

import { ContentCustomerOrderModal } from '../ContentCustomerOrderModal'

const ContainerCustomerOrderModal = () => (
  <Modal
    id="customer-order"
    fullscreenMobile
    maxWidth={600}
    titleHeader="Monte o seu Pedido"
    isCloseButton={false}
    footer={
      <div className={S.footer_modal}>
        <QuantityCounterButton
          quantity={0}
          onDecrease={() => ({})}
          onIncrease={() => ({})}
        />
        <CartButton label="Adicionar" />
      </div>
    }
  >
    <ContentCustomerOrderModal />
  </Modal>
)

export default memo(ContainerCustomerOrderModal)
