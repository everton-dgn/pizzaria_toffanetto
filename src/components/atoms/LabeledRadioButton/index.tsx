import { clsx } from 'clsx'

import S from './styles.module.scss'

import type { LabeledRadioButtonProps } from './types'

export const LabeledRadioButton = ({
  label,
  name,
  value,
  selectedValue,
  setSelectedValue,
  disabled
}: LabeledRadioButtonProps) => (
  <label className={clsx(S.label, disabled && S.disabled)}>
    <input
      type="radio"
      name={name}
      className={S.input}
      disabled={disabled}
      onChange={e => setSelectedValue(e?.target?.value)}
      checked={value === selectedValue}
      value={value}
    />
    {label}
  </label>
)
