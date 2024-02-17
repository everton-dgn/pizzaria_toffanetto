export const containerRow = ({ addUtilities }: any) => {
  const newUtilities = {
    '.container-row': {
      display: 'flex',
      flexFlow: 'row wrap',
      width: `min(100% - 32px, 1500px - 32px)`,
      '@screen sm': {
        width: `min(100% - 48px, 1500px - 48px)`
      }
    }
  }
  addUtilities(newUtilities, ['responsive'])
}
