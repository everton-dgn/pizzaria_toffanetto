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
      'row max-h-fit max-w-fit g-8 fs-14 ai-start jc-start',
      disabled ? 'cursor-not-allowed opacity-[0.6]' : 'cursor-pointer'
    )}
  >
    <input
      type="radio"
      name={name}
      className={clsx(
        S.input,
        'bg-grey-light-blue-hint size-16 min-h-16 min-w-16 appearance-none rounded-circle border-3 border-white transition-all duration-100 ease-linear',
        disabled
          ? 'bg-grey-light-blue-hint cursor-not-allowed border-white'
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
