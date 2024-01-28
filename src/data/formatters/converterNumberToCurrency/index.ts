import { type converterNumberToCurrencyProps } from './types'

export const converterNumberToCurrency = ({
  value,
  setsDecimalPlaces,
  setsCurrencySymbol
}: converterNumberToCurrencyProps) => {
  const isNumber = typeof value === 'number'
  const convertToNumber = isNumber ? value : Number(value)

  if (isNaN(convertToNumber) || !isFinite(convertToNumber)) return ''

  if (convertToNumber < 0) {
    throw new Error('O valor não pode ser negativo!')
  }

  if (convertToNumber > Number.MAX_SAFE_INTEGER) {
    throw new Error('O valor fornecido é muito grande!')
  }

  const language = 'pt-BR'
  const currency = 'BRL'
  const includesCurrency = setsCurrencySymbol
    ? { style: 'currency', currency }
    : {}
  const options = {
    ...includesCurrency,
    minimumFractionDigits: setsDecimalPlaces ?? 2,
    maximumFractionDigits: setsDecimalPlaces ?? 2
  }
  const currentCurrency = new Intl.NumberFormat(language, options)
  return currentCurrency.format(convertToNumber)
}
