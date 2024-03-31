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
    <div className="col-full g-1">
      {label && (
        <label className="fs-xs-semibold-grey-dark" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={clsx(
          'bw-solid hover:bw-solid focus:bw-solid-grey-light-500 resize-none px-4 py-2 br-lg row-full fs-base-semibold-grey-dark placeholder:fw-medium placeholder:tx-grey-light-500 focus:outline-[1.5px] focus:outline-offset-[-2px]',
          isErrored
            ? 'outline-error bc-error focus:otl-error'
            : 'bc-grey-light-500 hover:bc-grey-dark focus:otl-secondary-500'
        )}
        rows={rows}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!maxLength && (
        <div className="flex w-full g-1 jc-between">
          {isErrored && (
            <InfoMessage type="error" message={errorMessage} size="small" />
          )}
          {!!maxLength && (
            <small
              className={clsx(
                'ml-auto whitespace-nowrap fs-xs-semibold',
                isErrored ? 'tx-error' : 'tx-grey-500'
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
