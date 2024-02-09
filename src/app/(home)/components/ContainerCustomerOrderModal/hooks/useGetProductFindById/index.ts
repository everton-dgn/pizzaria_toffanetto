import { useCallback, useEffect, useState } from 'react'

import { useToast } from 'hooks'

import { productFindById } from 'infra/services/product'
import { useCustomerOrder } from 'infra/store/customerOrder'

export const useGetProductFindById = () => {
  const { stateCustomerOrder } = useCustomerOrder()
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState<ProductOptions>(null)
  const toast = useToast()

  const getProductFindById = useCallback(async () => {
    const { data, error } = await productFindById(stateCustomerOrder.id ?? '')
    setIsLoading(false)
    if (error) return toast.error(error)
    data && setProduct(data)
  }, [stateCustomerOrder.id, toast])

  useEffect(() => {
    getProductFindById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { product, isLoading }
}
