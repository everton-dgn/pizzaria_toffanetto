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
    <main className="mx-auto my-48 gap-48 container-col">
      <Suspense>
        <ProductListingSection />
      </Suspense>
    </main>
    <ContainerCustomerOrderModal />
  </>
)

export default Home
