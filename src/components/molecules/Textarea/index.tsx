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
    <div className="col-full g-4">
      {label && (
        <label className="text-12 font-600 text-grey-dark" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={clsx(
          S.textarea,
          'resize-none rounded-8 border border-solid px-16 py-8 text-16 font-600 text-grey-dark row-full',
          isErrored ? 'border-error outline-error' : 'border-grey-light'
        )}
        rows={rows}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!maxLength && (
        <div className="flex w-full jc-between g-4">
          {isErrored && (
            <InfoMessage type="error" message={errorMessage} size="small" />
          )}
          {!!maxLength && (
            <small
              className={clsx(
                'ml-auto whitespace-nowrap text-12 font-600',
                isErrored ? 'text-error' : 'text-grey'
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
