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
    <div className="rounded-20 bg-light-blue-hint p-20 shadow-card col g-16">
      <div className="relative aspect-10/7 max-h-[216px] w-full overflow-hidden rounded-12">
        <Image
          className="object-cover"
          src={img || PRODUCT_WITHOUT_IMAGE}
          alt="title"
          sizes="132px"
          fill
        />
      </div>
      <div className="flex-1 flex-nowrap gap-x-4 gap-y-8 jc-between col-full">
        <h3 className="line-clamp-2 text-16 font-700 uppercase text-primary-500">
          {product}
        </h3>
        <div className="flex-wrap jc-between ai-end row">
          <p className="text-12 lg:text-14">
            {!hasFixedPrice && 'A partir de '}
            <b className="text-14 font-600 lg:text-16">{formattedCurrency}</b>
          </p>
          <ViewButton id={id} product={product} category={category} />
        </div>
      </div>
    </div>
  )
}
