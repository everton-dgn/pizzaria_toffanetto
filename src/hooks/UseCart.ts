export const useCart = (price: number) => {
  const fixedTwoDecimals = price

  const convertToString = () => {
    return fixedTwoDecimals.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return convertToString()
}
