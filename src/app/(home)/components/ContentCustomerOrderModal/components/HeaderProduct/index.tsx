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
        <FavoriteButton className="absolute right-8 top-8 z-base" />
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
    <section className="gap-16 px-16 py-8 col sm:px-24 sm:py-12">
      <h2 className="underlined-title">{product}</h2>
      <p className="pb-12 text-16 font-500 text-grey-dark">{description}</p>
    </section>
  </>
)
