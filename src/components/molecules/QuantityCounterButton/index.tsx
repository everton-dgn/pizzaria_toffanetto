import { clsx } from 'clsx'
import { FaPlus as IconPlus, FaMinus as IconMinus } from 'react-icons/fa6'

import type { QuantityCounterButtonProps } from './types'

const btn =
  'hover:bg-grey-light-100 flex size-[30px] min-h-[30px] min-w-[30px] cursor-pointer rounded-circle bg-soft-white-blue transition-colors duration-150 ease-linear center active:bg-soft-white-blue disabled:cursor-not-allowed disabled:hover:bg-light-blue-hint disabled:active:bg-light-blue-hint'

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
        'h-32 min-h-32 flex-nowrap rounded-60 bg-white jc-between ai-center row',
        isContractibleButton
          ? 'ml-[58px] w-32 min-w-32'
          : 'w-[90px] min-w-[90px]'
      )}
    >
      {!isContractibleButton && (
        <>
          <button
            onClick={onDecrease}
            aria-label="Diminuir quantidade em 1"
            className={btn}
          >
            <IconMinus className="size-12 min-h-12 min-w-12 fill-primary-500" />
          </button>
          <span className="fw-600 flex h-full flex-1 text-center center fs-16">
            {quantity}
          </span>
        </>
      )}
      <button
        onClick={onIncrease}
        aria-label="Aumentar quantidade em 1"
        className={btn}
      >
        <IconPlus className="size-12 min-h-12 min-w-12 fill-primary-500" />
      </button>
    </div>
  )
}
