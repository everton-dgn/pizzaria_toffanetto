export const flexCenter = ({ addUtilities }: any) => {
  const newUtilities = {
    '.center': { justifyContent: 'center', alignItems: 'center' }
  }
  addUtilities(newUtilities, ['responsive'])
}
