import { clsx } from 'clsx'

import type { BadgeProps, Colors } from './types'

const colors: Record<Colors, string> = {
  green: 'bg-secondary-500',
  grey: 'tx-white bg-grey-500',
  red: 'tx-white bg-cherry'
}

export const Badge = ({ label, color = 'grey' }: BadgeProps) => (
  <span
    className={clsx(
      'flex whitespace-nowrap px-1.5 py-px uppercase br f-nowrap max-size-fit fs-xs-semibold',
      colors[color]
    )}
  >
    {label}
  </span>
)
