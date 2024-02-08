'use client'

import { FaPlus as IconPlus } from 'react-icons/fa6'

import { IconButton } from 'components/atoms'

import { queryParamsFormatter } from 'data/formatters'
import { useModalById } from 'infra/store/modalById'

import S from './styles.module.scss'

import type { ViewButtonProps } from './types'

const ViewButton = ({ id, product, category }: ViewButtonProps) => {
  const { stateModalById } = useModalById()

  const handleRedirect = () => {
    const query = {
      category,
      product,
      id
    }
    const queryParams = `?${queryParamsFormatter(query)}`
    window.history.replaceState(null, '', queryParams)
    stateModalById.setShowModal('customer-order')
  }

  return (
    <IconButton
      ariaLabel="Visualizar item"
      size="small"
      onClick={handleRedirect}
      className={S.icon_button}
      icon={<IconPlus />}
      isCircle
    />
  )
}

export default ViewButton
