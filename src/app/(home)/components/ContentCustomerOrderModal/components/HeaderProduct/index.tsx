import Image from 'next/image'

import { FavoriteButton } from 'components/atoms'

import type { HeaderProductProps } from './types'

export const HeaderProduct = ({
  img,
  product,
  description
}: HeaderProductProps) => (
  <>
    {!!img && (
      <div className="relative mb-3 aspect-600/317 ov-hidden">
        <FavoriteButton className="absolute z-base t-2 r-2" />
        <Image
          src={img}
          alt={product}
          className="obj-cover"
          sizes="600px"
          fill
          priority
        />
      </div>
    )}
    <section className="px-4 py-2 col g-4 sm:px-6 sm:py-[3px]">
      <h2 className="underlined-title">{product}</h2>
      <p className="pb-3 fw-medium fs-base-grey-dark">{description}</p>
    </section>
  </>
)
