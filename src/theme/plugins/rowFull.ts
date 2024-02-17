export const rowFull = ({ addUtilities }: any) => {
  const newUtilities = {
    '.row-full': { display: 'flex', flexFlow: 'row wrap', width: '100%' }
  }
  addUtilities(newUtilities, ['responsive'])
}
