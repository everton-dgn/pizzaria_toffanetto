export const justifyItems = ({ addUtilities }: any) => {
  const newUtilities = {
    '.ji-start': { justifyItems: 'start' },
    '.ji-end': { justifyItems: 'end' },
    '.ji-center': { justifyItems: 'center' },
    '.ji-stretch': { justifyItems: 'stretch' }
  }
  addUtilities(newUtilities, ['responsive'])
}
