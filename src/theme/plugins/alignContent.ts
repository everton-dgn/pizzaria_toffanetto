export const alignContent = ({ addUtilities }: any) => {
  const newUtilities = {
    '.ac-normal': {
      alignContent: 'normal'
    },
    '.ac-center': {
      alignContent: 'center'
    },
    '.ac-start': {
      alignContent: 'flex-start'
    },
    '.ac-end': {
      alignContent: 'flex-end'
    },
    '.ac-between': {
      alignContent: 'space-between'
    },
    '.ac-around': {
      alignContent: 'space-around'
    },
    '.ac-evenly': {
      alignContent: 'space-evenly'
    },
    '.ac-baseline': {
      alignContent: 'baseline'
    },
    '.ac-stretch': {
      alignContent: 'stretch'
    }
  }
  addUtilities(newUtilities, ['responsive'])
}
