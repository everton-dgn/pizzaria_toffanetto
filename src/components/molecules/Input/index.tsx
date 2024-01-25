'use client'

import { useEffect, useRef, useState, type InputHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { GoSync as IconSync } from 'react-icons/go'

import S from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  id: string
  placeholder: string
  label: string
  type: string
  autoFocus?: boolean
  onKeyPress?: any
  load?: boolean
}

export const Input = ({
  name,
  id,
  placeholder,
  onKeyPress,
  load,
  ...rest
}: InputProps) => {
  const inputRef = useRef(null)

  const [updateZipCode, setUpdateZipCode] = useState('')

  useEffect(() => {
    if (name === 'zipCode' && updateZipCode.length === 8) {
      onKeyPress(updateZipCode)
    }
  }, [updateZipCode, name, onKeyPress])

  const captureZipCode = (e: any) => {
    setUpdateZipCode(e.target.value.replace('-', ''))
  }

  return (
    <div className={S.containerInput}>
      <div className={clsx(S.wrapperInput)}>
        {name === 'zipCode' && load && <IconSync className={S.loadCep} />}
        <input
          autoComplete="new-password"
          name={name}
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={inputRef}
          onKeyUp={captureZipCode}
        />
        <label htmlFor={id}>{placeholder}</label>
      </div>
      <small className={S.msgError}>{/* {error} */}</small>
    </div>
  )
}
