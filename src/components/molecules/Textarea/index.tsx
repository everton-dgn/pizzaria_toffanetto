'use client'

import { type ChangeEvent, forwardRef, useCallback, useState } from 'react'

import { clsx } from 'clsx'

import { InfoMessage } from 'components/atoms'

import S from './style.module.scss'
import type { TextareaProps } from './types'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { name = '', id, label, onChange, error, maxLength, rows = 4, ...props },
    ref
  ) => {
    const [value, setValue] = useState('')
    const [numberOfCurrentCharacters, setNumberOfCurrentCharacters] =
      useState(0)

    const recordsNumberOfCharactersTyped = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        const numberOfCharactersTyped = e.target.value.length
        if (numberOfCharactersTyped === value.length) return
        setNumberOfCurrentCharacters(numberOfCharactersTyped)
      },
      [value.length]
    )

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
        recordsNumberOfCharactersTyped(e)
      },
      [recordsNumberOfCharactersTyped]
    )

    const isFooter = error || maxLength

    return (
      <div className={S.container}>
        {label && (
          <label className={S.label} htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          className={clsx(S.textarea, error && S.border_error)}
          rows={rows}
          id={id}
          ref={ref}
          name={name}
          onChange={handleChange}
          value={value}
          {...props}
        />
        {isFooter && (
          <div className={S.footer}>
            {error && <InfoMessage type="error" message={error} size="small" />}
            {maxLength && (
              <small
                className={clsx(S.number_of_characters, error && S.error_color)}
              >
                {numberOfCurrentCharacters}/{maxLength}
              </small>
            )}
          </div>
        )}
      </div>
    )
  }
)
