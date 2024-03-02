'use client'

import { FaPlus as IconPlus } from 'react-icons/fa6'

import { IconButton } from 'components/atoms'

import { queryParamsFormatter } from 'data/formatters'
import { useCustomerOrder } from 'infra/store/customerOrder'
import { useModalById } from 'infra/store/modalById'

import type { ViewButtonProps } from './types'

const ViewButton = ({ id, product, category }: ViewButtonProps) => {
  const { stateModalById } = useModalById()
  const { stateCustomerOrder } = useCustomerOrder()

  const handleRedirect = () => {
    const query = {
      category,
      product,
      id
    }
    const queryParams = `?${queryParamsFormatter(query)}`
    window.history.replaceState(null, '', queryParams)
    stateModalById.setShowModal('customer-order')
    stateCustomerOrder.setCustomerOrder({ id })
  }

  return (
    <IconButton
      ariaLabel="Visualizar item"
      size="small"
      onClick={handleRedirect}
      icon={<IconPlus className="size-12 fill-white" />}
      isCircle
    />
  )
}

export default ViewButton
