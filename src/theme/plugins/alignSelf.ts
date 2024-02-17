export const alignSelf = ({ addUtilities }: any) => {
  const newUtilities = {
    '.as-auto': {
      alignSelf: 'auto'
    },
    '.as-flex-start': {
      alignSelf: 'flex-start'
    },
    '.as-flex-end': {
      alignSelf: 'flex-end'
    },
    '.as-center': {
      alignSelf: 'center'
    },
    '.as-baseline': {
      alignSelf: 'baseline'
    },
    '.as-stretch': {
      alignSelf: 'stretch'
    }
  }
  addUtilities(newUtilities, ['responsive'])
}
