import { clsx } from 'clsx'
import { FaPlus as IconPlus, FaMinus as IconMinus } from 'react-icons/fa6'

import S from './styles.module.scss'

import type { QuantityCounterButtonProps } from './types'

export const QuantityCounterButton = ({
  quantity,
  onIncrease,
  onDecrease,
  isContractible
}: QuantityCounterButtonProps) => {
  const isContractibleButton = isContractible && quantity === 0

  return (
    <div className={clsx(S.container, isContractibleButton && S.contractible)}>
      {!isContractibleButton && (
        <>
          <button
            onClick={onDecrease}
            aria-label="Diminuir quantidade em 1"
            className={S.counter_button}
          >
            <IconMinus className={S.icon} />
          </button>
          <span className={S.quantity}>{quantity}</span>
        </>
      )}
      <button
        onClick={onIncrease}
        aria-label="Aumentar quantidade em 1"
        className={S.counter_button}
      >
        <IconPlus className={S.icon} />
      </button>
    </div>
  )
}
