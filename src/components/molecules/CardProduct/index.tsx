'use client'

import Image from 'next/image'

import { FaPlus as IconPlus } from 'react-icons/fa6'

import { Button } from 'components/atoms'
import { IconButton } from 'components/atoms'

import { converterNumberToCurrency } from 'data/formatters'
import { queryParamsFormatter } from 'data/formatters/queryParamsFormatter'

import S from './styles.module.scss'

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
  }

  return (
    <div className={S.container}>
      <Image
        src={img}
        alt="title"
        width={143}
        height={143}
        className={S.image}
      />
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
          />
        </div>
      </div>
    </div>
  )
}
