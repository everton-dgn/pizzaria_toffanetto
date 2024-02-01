import Image from 'next/image'

import { PRODUCT_WITHOUT_IMAGE } from 'constants/imagesDefault'

import S from './styles.module.scss'

import type { HeaderProductProps } from './types'

export const HeaderProduct = ({
  img,
  product,
  description
}: HeaderProductProps) => (
  <>
    <div className={S.wrapper_thumbnail}>
      <Image
        src={img || PRODUCT_WITHOUT_IMAGE}
        alt={product}
        className={S.thumbnail}
        sizes="600px"
        fill
        priority
      />
    </div>
    <section className={S.wrapper_info}>
      <h2 className={S.product_title}>{product}</h2>
      <p className={S.product_description}>{description}</p>
    </section>
  </>
)
