export const col = ({ addUtilities }: any) => {
  const newUtilities = {
    '.col': { display: 'flex', flexDirection: 'column' }
  }
  addUtilities(newUtilities, ['responsive'])
}
