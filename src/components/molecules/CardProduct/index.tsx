import Image from 'next/image'

import { PRODUCT_WITHOUT_IMAGE } from 'constants/imagesDefault'

import { converterNumberToCurrency } from 'data/formatters'

import S from './styles.module.scss'

import ViewButton from './components/ViewButton'
import type { CardProductProps } from './types'

export const CardProduct = ({
  id,
  img,
  product,
  price,
  hasFixedPrice,
  category
}: CardProductProps) => {
  const formattedCurrency = converterNumberToCurrency({
    value: price,
    setsCurrencySymbol: true
  })

  return (
    <div className={S.container}>
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
        <div className={S.footer}>
          <p className={S.message_price}>
            {!hasFixedPrice && 'A partir de '}
            <b>{formattedCurrency}</b>
          </p>
          <ViewButton id={id} product={product} category={category} />
        </div>
      </div>
    </div>
  )
}
