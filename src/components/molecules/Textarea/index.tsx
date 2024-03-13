import { clsx } from 'clsx'

import { InfoMessage } from 'components/atoms'

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
        <label className="fw-600 text-grey-dark fs-12" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={clsx(
          'fw-600 placeholder:fw-500 resize-none rounded-8 border border-solid px-16 py-8 text-grey-dark row-full fs-16 placeholder:text-grey-light-500 hover:border hover:border-solid focus:border focus:border-solid focus:border-grey-light-500 focus:outline-[1.5px] focus:outline-offset-[-2px]',
          isErrored
            ? 'border-error outline-error focus:outline-error'
            : 'border-grey-light-500 hover:border-grey-dark focus:outline-secondary-500'
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
                'fw-600 ml-auto whitespace-nowrap fs-12',
                isErrored ? 'text-error' : 'text-grey-500'
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
