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
      'ai-start fs-sm g-2 jc-start row max-size-fit',
      disabled ? 'cursor-not-allowed opacity-[0.6]' : 'cursor-pointer'
    )}
  >
    <input
      type="radio"
      name={name}
      className={clsx(
        S.input,
        'bg-grey-light-blue-hint bw-3-white disabled:bg-grey-light-blue-hint size-4 cursor-pointer appearance-none transition-all duration-100 ease-linear br-circle min-size-4 disabled:cursor-not-allowed disabled:bc-white'
      )}
      disabled={disabled}
      onChange={e => onChange(e.target.value)}
      checked={value === selectedValue}
      value={value}
    />
    {label}
  </label>
)
