import { clsx } from 'clsx'
import { FaPlus as IconPlus, FaMinus as IconMinus } from 'react-icons/fa6'

import type { QuantityCounterButtonProps } from './types'

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
            className="flex size-[30px] min-h-[30px] min-w-[30px] cursor-pointer rounded-circle bg-ultra-light transition-colors duration-200 ease-linear center hover:bg-grey-ultra-light active:bg-ultra-light disabled:cursor-not-allowed disabled:hover:bg-ultra-light disabled:active:bg-ultra-light"
          >
            <IconMinus className="size-12 min-h-12 min-w-12 fill-primary" />
          </button>
          <span className="flex h-full flex-1 text-center text-16 font-600 center">
            {quantity}
          </span>
        </>
      )}
      <button
        onClick={onIncrease}
        aria-label="Aumentar quantidade em 1"
        className="flex size-[30px] min-h-[30px] min-w-[30px] cursor-pointer rounded-circle bg-ultra-light transition-colors duration-200 ease-linear center hover:bg-grey-ultra-light active:bg-ultra-light disabled:cursor-not-allowed disabled:hover:bg-ultra-light disabled:active:bg-ultra-light"
      >
        <IconPlus className="size-12 min-h-12 min-w-12 fill-primary" />
      </button>
    </div>
  )
}
