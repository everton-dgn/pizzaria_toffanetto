import { clsx } from 'clsx'

import type { BadgeProps, Colors } from './types'

const colors = (color: Colors) => ({
  'bg-secondary-500': color === 'green',
  'text-white bg-grey-500': color === 'grey',
  'text-white bg-cherry': color === 'red'
})

export const Badge = ({ label, color = 'grey' }: BadgeProps) => (
  <span
    className={clsx(
      'flex max-h-fit max-w-fit flex-nowrap whitespace-nowrap rounded-20 px-6 py-1 text-12 font-600 uppercase',
      colors(color)
    )}
  >
    {label}
  </span>
)
