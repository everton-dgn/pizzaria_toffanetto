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
        <section key={id} className="col-full g-20 sm:g-32">
          <h2 className="underlined-title sm:text-28 md:text-32">{category}</h2>
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] g-20 sm:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] sm:g-24 lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
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
