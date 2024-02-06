import { notFound } from 'next/navigation'

import { CardProduct } from 'components/molecules'

import { availableProductsFindAll } from 'infra/services/availableProducts'

import S from './styles.module.scss'

const ProductListingSection = async () => {
  const { data: availableProducts } = await availableProductsFindAll()

  if (!availableProducts) notFound()

  return (
    <>
      {availableProducts?.map(({ id, category, items }) => (
        <section key={id} className={S.section}>
          <h2 className={S.title}>{category}</h2>
          <div className={S.products}>
            {items.map(item => (
              <CardProduct key={item.id} category={category} {...item} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default ProductListingSection
