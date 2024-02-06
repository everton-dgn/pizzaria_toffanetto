'use client'

import { useRef } from 'react'

import { FaPlus as IconPlus } from 'react-icons/fa6'

import { CartButton, IconButton } from 'components/atoms'
import { Modal, QuantityCounterButton } from 'components/molecules'
import type { ModalHandle } from 'components/molecules/Modal/types'
import { OrderCreationModal } from 'components/organisms'

import { queryParamsFormatter } from 'data/formatters'

import S from './styles.module.scss'

import type { ViewButtonProps } from './types'

const ViewButton = ({ id, product, category }: ViewButtonProps) => {
  const modalRef = useRef<ModalHandle>(null)

  const handleRedirect = () => {
    const query = {
      category,
      product,
      id
    }
    const queryParams = `?${queryParamsFormatter(query)}`
    window.history.replaceState(null, '', queryParams)
    modalRef?.current?.show()
  }

  return (
    <>
      <Modal
        ref={modalRef}
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
        <OrderCreationModal id={id} />
      </Modal>
      <IconButton
        ariaLabel="Visualizar item"
        size="small"
        onClick={handleRedirect}
        className={S.icon_button}
        icon={<IconPlus />}
        isCircle
      />
    </>
  )
}

export default ViewButton
