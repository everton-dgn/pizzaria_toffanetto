import Image from 'next/image'

import { PRODUCT_WITHOUT_IMAGE } from 'constants/imagesDefault'

import { converterNumberToCurrency } from 'data/formatters'

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
    <div className="bg-light-blue-hint p-5 shadow-card br-[5px] col g-4">
      <div className="rounded-3 relative aspect-10/7 max-h-56 w-full ov-hidden">
        <Image
          className="obj-cover"
          src={img || PRODUCT_WITHOUT_IMAGE}
          alt="title"
          sizes="132px"
          fill
        />
      </div>
      <div className="col-full f-1 f-nowrap gx-1 gy-2 jc-between">
        <h3 className="line-clamp-2 uppercase fs-base-bold-primary-500">
          {product}
        </h3>
        <div className="ai-end f-wrap jc-between row">
          <p className="fs-xs lg:fs-sm">
            {!hasFixedPrice && 'A partir de '}
            <b className="fs-sm-semibold lg:fs-base">{formattedCurrency}</b>
          </p>
          <ViewButton id={id} product={product} category={category} />
        </div>
      </div>
    </div>
  )
}
