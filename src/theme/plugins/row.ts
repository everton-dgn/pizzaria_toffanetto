export const row = ({ addUtilities }: any) => {
  const newUtilities = {
    '.row': { display: 'flex', flexFlow: 'row wrap' }
  }
  addUtilities(newUtilities, ['responsive'])
}
