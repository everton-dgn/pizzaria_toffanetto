import { clsx } from 'clsx'

import { InfoMessage } from 'components/atoms'

import S from './style.module.scss'
import type { TextareaProps } from './types'

export const Textarea = ({
  name = '',
  id,
  label,
  value,
  onChange,
  maxLength,
  rows = 4,
  ...props
}: TextareaProps) => {
  const isErrored = value.length > (maxLength ?? 0)
  const errorMessage = `Limite de ${maxLength} caracteres excedido`

  return (
    <div className={S.container}>
      {label && (
        <label className={S.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={clsx(S.textarea, isErrored && S.border_error)}
        rows={rows}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!maxLength && (
        <div className={S.footer}>
          {isErrored && (
            <InfoMessage type="error" message={errorMessage} size="small" />
          )}
          {!!maxLength && (
            <small
              className={clsx(
                S.number_of_characters,
                isErrored && S.error_color
              )}
            >
              {value?.length}/{maxLength}
            </small>
          )}
        </div>
      )}
    </div>
  )
}
