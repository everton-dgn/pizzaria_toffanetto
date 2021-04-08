import { useEffect, useRef, useState } from 'react'
import * as S from 'components/Forms/Select/styles'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'
import { useField } from '@unform/core'
import NoSSR from 'react-no-ssr'

interface Props extends SelectProps<OptionTypeBase> {
  name: string
  id: string
  placeholder: string
  label: string
}

export const Select = ({ name, id, placeholder, ...rest }: Props) => {
  const selectRef = useRef(null)
  const { fieldName, registerField, error, clearError } = useField(name)

  const [renderAndSaveSelected, setRenderAndSaveSelected] = useState([])

  const statesOptions = [
    { value: 'AC', label: 'AC' },
    { value: 'AL', label: 'AL' },
    { value: 'AP', label: 'AP' },
    { value: 'AM', label: 'AM' },
    { value: 'BA', label: 'BA' },
    { value: 'CE', label: 'CE' },
    { value: 'DF', label: 'DF' },
    { value: 'ES', label: 'ES' },
    { value: 'GO', label: 'GO' },
    { value: 'MA', label: 'MA' },
    { value: 'MT', label: 'MT' },
    { value: 'MS', label: 'MS' },
    { value: 'MG', label: 'MG' },
    { value: 'PA', label: 'PA' },
    { value: 'PB', label: 'PB' },
    { value: 'PR', label: 'PR' },
    { value: 'PE', label: 'PE' },
    { value: 'PI', label: 'PI' },
    { value: 'RJ', label: 'RJ' },
    { value: 'RN', label: 'RN' },
    { value: 'RS', label: 'RS' },
    { value: 'RO', label: 'RO' },
    { value: 'RR', label: 'RR' },
    { value: 'SC', label: 'SC' },
    { value: 'SP', label: 'SP' },
    { value: 'SE', label: 'SE' },
    { value: 'TO', label: 'TO' }
  ]

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value.value'
    })
  }, [fieldName, registerField, renderAndSaveSelected])

  const clearField = () => {
    if (error !== undefined) clearError()
  }

  const changeFocusAdd = (e: any) => {
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
      'focusSelect'
    )

    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
      'elevationLabel'
    )
  }

  const changeFocusRemove = (e: any) => {
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(
      'focusSelect'
    )

    // @ts-ignore
    if (selectRef.current.state.value === null) {
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(
        'elevationLabel'
      )
    }
  }

  return (
    <>
      <S.ContainerInput>
        <S.WrapperInput error={error}>
          <NoSSR>
            <ReactSelect
              name={name}
              id={id}
              ref={selectRef}
              {...rest}
              options={statesOptions}
              placeholder={placeholder}
              noOptionsMessage={() => 'Nenhum resultado!'}
              isClearable
              onInputChange={(value: any) => setRenderAndSaveSelected(value)}
              onChange={clearField}
              onFocus={changeFocusAdd}
              onBlur={changeFocusRemove}
            />
          </NoSSR>

          <label id="label">{placeholder}</label>
        </S.WrapperInput>
        <S.MsgError error={error}>{error && error}</S.MsgError>
      </S.ContainerInput>
    </>
  )
}
