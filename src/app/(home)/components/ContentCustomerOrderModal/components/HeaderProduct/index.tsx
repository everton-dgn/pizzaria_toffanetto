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
      <div className="relative mb-12 aspect-600/317 overflow-hidden">
        <FavoriteButton className="absolute z-base t-8 r-8" />
        <Image
          src={img}
          alt={product}
          className="object-cover"
          sizes="600px"
          fill
          priority
        />
      </div>
    )}
    <section className="px-16 py-8 col g-16 sm:px-24 sm:py-12">
      <h2 className="underlined-title">{product}</h2>
      <p className="fw-500 pb-12 text-grey-dark fs-16">{description}</p>
    </section>
  </>
)
