'use client'

import { useEffect, useState } from 'react'

import { useToast } from 'hooks'

import { productFindById } from 'infra/services/product'
import type { ProductOptions } from 'infra/services/product/types'

import S from './styles.module.scss'

import { HeaderProduct, SectionProduct } from './components'
import type { OrderCreationModalProps } from './types'

export const OrderCreationModal = ({ id }: OrderCreationModalProps) => {
  const [product, setProduct] = useState<ProductOptions>(null)
  const toast = useToast()

  const getProductFindById = async () => {
    // TODO: injetar serviço como prop no componente
    // TODO: iconbutton transparente em vez de cor por sombra na interação
    const { data, error } = await productFindById(id)
    if (error) return toast.error(error)
    data && setProduct(data)
  }

  useEffect(() => {
    getProductFindById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={S.container}>
      {!!product && (
        <HeaderProduct
          img={product.img}
          product={product.product}
          description={product?.description}
        />
      )}
      {!!product?.size && (
        <SectionProduct
          title={product.size.title}
          isRequired={product.size.isRequired}
          isDone={false}
          description={product.size.description}
        >
          exemplo
        </SectionProduct>
      )}
    </div>
  )
}
