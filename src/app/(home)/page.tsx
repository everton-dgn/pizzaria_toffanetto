import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Banner } from 'components/organisms'

import S from './styles.module.scss'

import ContainerCustomerOrderModal from './components/ContainerCustomerOrderModal'

const ProductListingSection = dynamic(
  async () => await import('./components/ProductListingSection')
)

const Home = () => (
  <>
    <Banner />
    <main className={S.container}>
      <Suspense>
        <ProductListingSection />
      </Suspense>
    </main>
    <ContainerCustomerOrderModal />
  </>
)

export default Home
