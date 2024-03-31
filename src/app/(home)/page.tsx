import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Banner } from 'components/organisms'

import ContainerCustomerOrderModal from './components/ContainerCustomerOrderModal'

const ProductListingSection = dynamic(
  async () => await import('./components/ProductListingSection')
)

const Home = () => (
  <>
    <Banner />
    <main className="mx-auto my-12 container-col g-12">
      <Suspense>
        <ProductListingSection />
      </Suspense>
    </main>
    <ContainerCustomerOrderModal />
  </>
)

export default Home
