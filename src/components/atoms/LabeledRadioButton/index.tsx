import { clsx } from 'clsx'

import S from './styles.module.css'

import type { LabeledRadioButtonProps } from './types'
export const LabeledRadioButton = ({
  label,
  name,
  value,
  selectedValue,
  onChange,
  disabled
}: LabeledRadioButtonProps) => (
  <label
    className={clsx(
      'max-h-fit max-w-fit gap-8 text-14 jc-start ai-start row',
      disabled ? 'cursor-not-allowed opacity-[0.6]' : 'cursor-pointer'
    )}
  >
    <input
      type="radio"
      name={name}
      className={clsx(
        S.input,
        'size-16 min-h-16 min-w-16 appearance-none rounded-circle border-3 border-white bg-grey-ultra-light transition-all duration-100 ease-linear',
        disabled
          ? 'cursor-not-allowed border-white bg-grey-ultra-light'
          : 'cursor-pointer'
      )}
      disabled={disabled}
      onChange={e => onChange(e.target.value)}
      checked={value === selectedValue}
      value={value}
    />
    {label}
  </label>
)
