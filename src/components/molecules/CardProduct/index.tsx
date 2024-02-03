'use client'

import Image from 'next/image'
import { useRef } from 'react'

import { FaPlus as IconPlus } from 'react-icons/fa6'

import { CartButton, IconButton } from 'components/atoms'
import { Modal, QuantityCounterButton } from 'components/molecules'
import { OrderCreationModal } from 'components/organisms'

import { PRODUCT_WITHOUT_IMAGE } from 'constants/imagesDefault'

import { converterNumberToCurrency } from 'data/formatters'
import { queryParamsFormatter } from 'data/formatters/queryParamsFormatter'

import S from './styles.module.scss'

import type { ModalHandle } from '../Modal/types'
import type { CardProductProps } from './types'

const MESSAGE_PRICE = (hasFixedPrice: boolean) => {
  return hasFixedPrice ? 'Apenas ' : 'A partir de '
}

export const CardProduct = ({
  id,
  img,
  description,
  product,
  price,
  hasFixedPrice,
  category
}: CardProductProps) => {
  const modalRef = useRef<ModalHandle>(null)
  const formattedCurrency = converterNumberToCurrency({
    value: price,
    setsCurrencySymbol: true
  })

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
    <div className={S.container}>
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
            <CartButton />
          </div>
        }
      >
        <OrderCreationModal id={id} />
      </Modal>
      <div className={S.wrapper_thumbnail}>
        <Image
          className={S.thumbnail}
          src={img || PRODUCT_WITHOUT_IMAGE}
          alt="title"
          sizes="132px"
          fill
        />
      </div>
      <div className={S.wrapper_info}>
        <h3 className={S.title}>{product}</h3>
        <p className={S.description}>{description}</p>
        <div className={S.footer}>
          <p className={S.message_price}>
            {MESSAGE_PRICE(hasFixedPrice)}
            <b>{formattedCurrency}</b>
          </p>
          <IconButton
            ariaLabel="Visualizar item"
            size="small"
            onClick={handleRedirect}
            className={S.icon_button}
            icon={<IconPlus />}
            isCircle
          />
        </div>
      </div>
    </div>
  )
}
