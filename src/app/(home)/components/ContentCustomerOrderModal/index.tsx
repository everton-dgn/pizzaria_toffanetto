'use client'

import { useEffect, useState } from 'react'

import { Textarea } from 'components/molecules'

import { useToast } from 'hooks'

import { productFindById } from 'infra/services/product'
import { useCustomerOrder } from 'infra/store/customerOrder'

import S from './styles.module.scss'

import {
  FlavorQuantitySelectorGroup,
  HeaderProduct,
  RadioButtonGroup,
  SectionProduct
} from './components'

const id = '1'
export const ContentCustomerOrderModal = () => {
  const [product, setProduct] = useState<ProductOptions>(null)
  const { stateCustomerOrder } = useCustomerOrder()
  const toast = useToast()

  const getProductFindById = async () => {
    // TODO: injetar serviço como prop no componente
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
          <RadioButtonGroup
            options={product.size.options}
            optionNameId="size"
            selectedRadioButtonGroupValue={stateCustomerOrder.sizeOptions?.id}
            setSelectedRadioButtonGroupValue={stateCustomerOrder.setSizeOptions}
          />
        </SectionProduct>
      )}
      {!!product?.flavor && stateCustomerOrder.sizeOptions?.id && (
        <SectionProduct
          title={product.flavor.title}
          isRequired={product.flavor.isRequired}
          isDone={false}
          description={product.flavor.description}
        >
          <FlavorQuantitySelectorGroup options={product.flavor.options} />
        </SectionProduct>
      )}
      {!!product?.edgeFlavor && (
        <SectionProduct
          title={product.edgeFlavor.title}
          isRequired={product.edgeFlavor.isRequired}
          isDone={false}
          description={product.edgeFlavor.description}
        >
          <RadioButtonGroup
            options={product.edgeFlavor.options}
            optionNameId="edgeFlavor"
            selectedRadioButtonGroupValue={
              stateCustomerOrder.edgeFlavorOptions?.id
            }
            setSelectedRadioButtonGroupValue={
              stateCustomerOrder.setEdgeFlavorOptions
            }
          />
        </SectionProduct>
      )}
      {!!product?.additional && (
        <SectionProduct
          title={product.additional.title}
          isRequired={product.additional.isRequired}
          isDone={false}
          description={product.additional.description}
        >
          <RadioButtonGroup
            options={product.additional.options}
            optionNameId="additional"
            selectedRadioButtonGroupValue={
              stateCustomerOrder.additionalOptions?.id
            }
            setSelectedRadioButtonGroupValue={
              stateCustomerOrder.setAdditionalOptions
            }
          />
        </SectionProduct>
      )}
      {!!product?.orderComment && (
        <SectionProduct
          title={product.orderComment.title}
          isRequired={product.orderComment.isRequired}
          isDone={false}
          description={product.orderComment.description}
        >
          <Textarea
            placeholder="Adicione um comentário"
            rows={3}
            maxLength={400}
            onChange={e => stateCustomerOrder.setOrderComment(e.target.value)}
            value={stateCustomerOrder.orderComment ?? ''}
          />
        </SectionProduct>
      )}
    </div>
  )
}
