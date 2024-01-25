'use client'

import { type InputHTMLAttributes, useEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'
import { IoIosArrowDown as IconArrowDown } from 'react-icons/io'
import { IoCloseOutline as IconClose } from 'react-icons/io5'

import S from './styles.module.scss'

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  id: string
  placeholder: string
  label: string
  type: string
  autoFocus?: boolean
  onKeyPress?: any
  load?: boolean
  setStateInSelect?: string
  options: Array<{ value: string; label: string }>
  disabledField: boolean
}

export const Select = ({
  name,
  id,
  placeholder,
  onKeyPress,
  load,
  setStateInSelect,
  options,
  disabledField,
  ...rest
}: SelectProps) => {
  const [showOption, setShowOption] = useState(false)
  const [valueOption, setValueOption] = useState('')
  const [listOption, setListOption] = useState(options)

  const selectRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    valueOption.length === 0 && setListOption(options)
  }, [options, valueOption])

  useEffect(() => {
    setStateInSelect && setValueOption(setStateInSelect)
  }, [setStateInSelect])

  // verifica se o texto do input corresponde a alguma das options
  const checkValueInOptions = () => options.find(el => el.value === valueOption)

  // ao perder o focus do input limpa o texto digitado se não corresponder a nenhuma das options
  const verifyValue = () => {
    !checkValueInOptions() && setValueOption('')
  }

  // mostra dropdown ao clicar no input
  const showDropdownOptions = () => {
    // verifica se nas options tem o valor digitado no input, se true, mostra todas as options
    checkValueInOptions() && setListOption(options)
    // mostra dropdown
    setShowOption(true)
  }

  // oculta as options ao remover o mouse do input ou das options
  const hiddenDropdownOptions = () => {
    // oculta dropdown
    setShowOption(false)
    // popula options
    setListOption(options)
    // ao remover o mouse do input ou dropdown, limpa o valor digitado se não corresponder a uma option
    verifyValue()
  }

  // grava option escolhida ao clicar
  const selectOption = (value: string) => {
    // grava valor ao clicar em uma option
    setValueOption(value)
    // oculta dropdown
    setShowOption(false)
  }

  // filtra options ao digitar
  const filterDataOptions = (e: string) => {
    // recebe valor digitado e normaliza
    const valueInput = e
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    // retorna lista de options filtrada que contém o texto digitado
    const filteredOptions = options.filter(el => {
      return el.value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(valueInput)
    })

    // troca as options default pela lista filtrada
    setListOption(filteredOptions)
  }

  // detecta alterações nos valores do input ao digitar
  const searchText = (e: string) => {
    // grava valor digitado no input e transforma texto em caixa alta
    setValueOption(e.toUpperCase())
    // filtra options ao digitar
    filterDataOptions(e)
  }

  // limpa opção selecionada ao clicar no "x" do input
  // const clearSelect = () => {
  // limpa option escolhida
  // setValueOption('')
  // popula options
  // setListOption(options)
  // }

  // mostra options ao clicar no chevron down
  // const showOptionsAndFocus = () => {
  // mostra dropdown
  // setShowOption(true)
  // popula options
  // setListOption(options)
  // }

  return (
    <>
      <div className={S.containerInput}>
        <div
          className={clsx(S.wrapperInput)}
          onMouseLeave={() => hiddenDropdownOptions()}
        >
          {/* input fake para desabilitar autocomplete */}
          <input className={S.inputHidden} type="text" name={name} />
          <input
            disabled={disabledField}
            autoComplete="new-password"
            name={name}
            id={id}
            placeholder={placeholder}
            {...rest}
            ref={selectRef}
            value={valueOption}
            onClick={() => showDropdownOptions()}
            onChange={e => searchText(e.target.value)}
          />
          <label htmlFor={id}>{placeholder}</label>

          <div className={S.containerICons}>
            <IconClose
              className={clsx(S.iconClose, !valueOption && S.hidden)}
            />
            <IconArrowDown className={S.iconArrowDown} />
          </div>

          <div
            className={S.containerOptions}
            style={{ display: showOption ? 'flex' : 'none' }}
          >
            {listOption?.map(el => (
              <div
                className={clsx(
                  S.option,
                  valueOption.toUpperCase() === el.value && S.highlight
                )}
                key={el.label}
                onClick={() => selectOption(el.value)}
              >
                {el.label}
              </div>
            ))}

            <p className={clsx(S.notFound, !!listOption?.length && S.hidden)}>
              Nenhum resultado encontrado!
            </p>
          </div>
        </div>
        <small className={S.msgError}>{/* {error} */}</small>
      </div>
    </>
  )
}
