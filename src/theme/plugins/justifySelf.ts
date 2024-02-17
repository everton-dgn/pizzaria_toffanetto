export const justifySelf = ({ addUtilities }: any) => {
  const newUtilities = {
    '.js-auto': { justifySelf: 'auto' },
    '.js-start': { justifySelf: 'start' },
    '.js-end': { justifySelf: 'end' },
    '.js-center': { justifySelf: 'center' },
    '.js-stretch': { justifySelf: 'stretch' }
  }
  addUtilities(newUtilities, ['responsive'])
}
