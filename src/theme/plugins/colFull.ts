export const colFull = ({ addUtilities }: any) => {
  const newUtilities = {
    '.col-full': { display: 'flex', flexDirection: 'column', width: '100%' }
  }
  addUtilities(newUtilities, ['responsive'])
}
