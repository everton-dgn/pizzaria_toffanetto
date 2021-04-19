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
  setStateInSelect?: object
}

export const Select = ({
  name,
  id,
  placeholder,
  setStateInSelect,
  isDisabled,
  ...rest
}: Props) => {
  const selectRef = useRef(null)
  const { fieldName, registerField, error, clearError } = useField(name)

  const [renderAndSaveSelected, setRenderAndSaveSelected] = useState([])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value.value'
    })
  }, [fieldName, registerField, renderAndSaveSelected])

  useEffect(() => {
    if (setStateInSelect) {
      // @ts-ignore
      selectRef.current?.select.setValue(setStateInSelect)
      // @ts-ignore
      changeFocusAdd(selectRef.current?.select.inputRef)
      // @ts-ignore
      changeFocusRemove(selectRef.current?.select.inputRef)
    }
  }, [setStateInSelect, isDisabled])

  const clearField = () => {
    if (error !== undefined) clearError()
  }

  const changeFocusAdd = (e: any) => {
    e.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
      'focusSelect'
    )

    e.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
      'elevationLabel'
    )
  }

  const changeFocusRemove = (e: any) => {
    e.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(
      'focusSelect'
    )

    // @ts-ignore
    if (selectRef.current?.state.value === null) {
      e.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(
        'elevationLabel'
      )
    }
  }

  return (
    <>
      <S.ContainerInput>
        <S.WrapperInput error={error} disabledField={isDisabled}>
          <NoSSR>
            <ReactSelect
              name={name}
              id={id}
              ref={selectRef}
              {...rest}
              placeholder={placeholder}
              noOptionsMessage={() => 'Nenhum resultado!'}
              isClearable
              onInputChange={(value: any) => setRenderAndSaveSelected(value)}
              onChange={clearField}
              onFocus={e => changeFocusAdd(e.target)}
              onBlur={e => changeFocusRemove(e.target)}
              maxMenuHeight={240}
              isDisabled={isDisabled}
            />
          </NoSSR>

          <label id="label">{placeholder}</label>
        </S.WrapperInput>
        <S.MsgError error={error}>{error && error}</S.MsgError>
      </S.ContainerInput>
    </>
  )
}
