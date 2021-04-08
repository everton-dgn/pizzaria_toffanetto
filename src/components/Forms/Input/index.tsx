import { useEffect, useRef } from 'react'
import * as S from 'components/Forms/Input/styles'
import { useField } from '@unform/core'
import ReactInputMask, { Props as InputProps } from 'react-input-mask'

interface Props extends InputProps {
  name: string
  id: string
  placeholder: string
  label: string
  type: string
  autoFocus?: boolean
}

export const Input = ({ name, id, placeholder, mask, ...rest }: Props) => {
  const inputRef = useRef(null)

  const { fieldName, registerField, error, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  const clearField = () => {
    if (error !== undefined) clearError()
  }

  return (
    <>
      <S.ContainerInput>
        <S.WrapperInput error={error}>
          <ReactInputMask
            name={name}
            id={id}
            placeholder={placeholder}
            {...rest}
            ref={inputRef}
            onInput={clearField}
            mask={mask}
            maskPlaceholder={null}
          />
          <label htmlFor={id}>{placeholder}</label>
        </S.WrapperInput>
        <S.MsgError error={error}>{error && error}</S.MsgError>
      </S.ContainerInput>
    </>
  )
}
