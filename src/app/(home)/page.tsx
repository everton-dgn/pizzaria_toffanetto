import { notFound } from 'next/navigation'

import { CardProduct } from 'components/molecules'
import { Banner } from 'components/organisms'

import { availableProductsFindAll } from 'infra/services/availableProducts'

import S from './styles.module.scss'

const Home = async () => {
  const { data: availableProducts } = await availableProductsFindAll()

  if (!availableProducts) notFound()

  return (
    <>
      <Banner />
      <main className={S.container}>
        {availableProducts.map(({ id, category, items }) => (
          <section key={id} className={S.section}>
            <h2 className={S.title}>{category}</h2>
            <div className={S.products}>
              {items.map(item => (
                <CardProduct key={item.id} category={category} {...item} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export default Home
