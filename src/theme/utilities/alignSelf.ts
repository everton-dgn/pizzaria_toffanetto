import plugin from 'tailwindcss/plugin'

export const alignSelf = plugin(({ addUtilities }) => {
  addUtilities({
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
  })
})
