import { converterNumberToCurrency } from '..'

describe('[Data] convertNumberToCurrency', () => {
  it('should return a currency formatted string when passed a valid number', () => {
    expect(converterNumberToCurrency({ value: 12345.67 })).toBe('12.345,67')
    expect(
      converterNumberToCurrency({ value: 12345.67, setsCurrencySymbol: true })
    ).toBe('R$\xa012.345,67')
    expect(
      converterNumberToCurrency({ value: 12345.678, setsDecimalPlaces: 3 })
    ).toBe('12.345,678')
  })

  it('should return a currency formatted string when passed a valid string number', () => {
    expect(converterNumberToCurrency({ value: '12345.67' })).toBe('12.345,67')
    expect(
      converterNumberToCurrency({ value: '12345.67', setsCurrencySymbol: true })
    ).toBe('R$\xa012.345,67')
    expect(
      converterNumberToCurrency({ value: '12345.678', setsDecimalPlaces: 3 })
    ).toBe('12.345,678')
  })

  it('should return an empty string when passed an invalid value', () => {
    expect(converterNumberToCurrency({ value: 'not a number' })).toBe('')
    expect(converterNumberToCurrency({ value: NaN })).toBe('')
    expect(converterNumberToCurrency({ value: Infinity })).toBe('')
  })

  it('should throw an error when passed a negative number', () => {
    expect(() => converterNumberToCurrency({ value: -12345.67 })).toThrow()
  })

  it('should throw an error when passed a number that is too large', () => {
    expect(() =>
      converterNumberToCurrency({ value: Number.MAX_SAFE_INTEGER + 1 })
    ).toThrow()
  })
})
