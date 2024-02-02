import Image from 'next/image'

import S from './styles.module.scss'

import type { HeaderProductProps } from './types'

export const HeaderProduct = ({
  img,
  product,
  description
}: HeaderProductProps) => (
  <>
    {!!img && (
      <div className={S.wrapper_thumbnail}>
        <Image
          src={img}
          alt={product}
          className={S.thumbnail}
          sizes="600px"
          fill
          priority
        />
      </div>
    )}
    <section className={S.wrapper_info}>
      <h2 className={S.product_title}>{product}</h2>
      <p className={S.product_description}>{description}</p>
    </section>
  </>
)
