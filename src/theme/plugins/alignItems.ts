export const alignItems = ({ addUtilities }: any) => {
  const newUtilities = {
    '.ai-flex-start': {
      alignItems: 'flex-start'
    },
    '.ai-flex-end': {
      alignItems: 'flex-end'
    },
    '.ai-center': {
      alignItems: 'center'
    },
    '.ai-baseline': {
      alignItems: 'baseline'
    },
    '.ai-stretch': {
      alignItems: 'stretch'
    }
  }
  addUtilities(newUtilities, ['responsive'])
}
