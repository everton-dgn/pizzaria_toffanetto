import { notFound } from 'next/navigation'
import { memo } from 'react'

import { CardProduct } from 'components/molecules'

import { availableProductsFindAll } from 'infra/services/availableProducts'

const ProductListingSection = async () => {
  const { data: availableProducts } = await availableProductsFindAll()

  if (!availableProducts) notFound()

  return (
    <>
      {availableProducts?.map(({ id, category, items }) => (
        <section key={id} className="gap-20 col-full sm:gap-32">
          <h2 className="underlined-title md:text-32 sm:text-28">{category}</h2>
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-20 sm:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] sm:gap-24 lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {items.map(item => (
              <CardProduct key={item.id} category={category} {...item} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default memo(ProductListingSection)
