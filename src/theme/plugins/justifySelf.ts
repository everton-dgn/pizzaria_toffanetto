export const justifySelf = ({ addUtilities }: any) => {
  const justifySelfUtilities = {
    '.js-auto': { justifySelf: 'auto' },
    '.js-start': { justifySelf: 'start' },
    '.js-end': { justifySelf: 'end' },
    '.js-center': { justifySelf: 'center' },
    '.js-stretch': { justifySelf: 'stretch' }
  }
  addUtilities(justifySelfUtilities, ['responsive'])
}
