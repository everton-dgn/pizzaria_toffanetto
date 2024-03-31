import { clsx } from 'clsx'
import { FaPlus as IconPlus, FaMinus as IconMinus } from 'react-icons/fa6'

import type { QuantityCounterButtonProps } from './types'

const btn =
  'hover:bg-grey-light-100 flex min-size-[30px] cursor-pointer rounded-circle bg-soft-white-blue transition-colors duration-150 ease-linear center active:bg-soft-white-blue disabled:cursor-not-allowed disabled:hover:bg-light-blue-hint disabled:active:bg-light-blue-hint'

export const QuantityCounterButton = ({
  quantity,
  onIncrease,
  onDecrease,
  isContractible
}: QuantityCounterButtonProps) => {
  const isContractibleButton = isContractible && quantity === 0

  return (
    <div
      className={clsx(
        'h-8 min-h-8 bg-white ai-center br-full f-nowrap jc-between row',
        isContractibleButton ? 'ml-[58px] w-8 min-w-8' : 'w-[90px] min-w-[90px]'
      )}
    >
      {!isContractibleButton && (
        <>
          <button
            onClick={onDecrease}
            aria-label="Diminuir quantidade em 1"
            className={btn}
          >
            <IconMinus className="fill-primary-500 min-size-3" />
          </button>
          <span className="flex h-full f-1 center fs-base-semibold tx-center">
            {quantity}
          </span>
        </>
      )}
      <button
        onClick={onIncrease}
        aria-label="Aumentar quantidade em 1"
        className={btn}
      >
        <IconPlus className="fill-primary-500 min-size-3" />
      </button>
    </div>
  )
}
