export const justifyItems = ({ addUtilities }: any) => {
  const justifyItemsUtilities = {
    '.ji-start': { justifyItems: 'start' },
    '.ji-end': { justifyItems: 'end' },
    '.ji-center': { justifyItems: 'center' },
    '.ji-stretch': { justifyItems: 'stretch' }
  }
  addUtilities(justifyItemsUtilities, ['responsive'])
}
