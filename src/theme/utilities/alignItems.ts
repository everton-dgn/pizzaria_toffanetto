import plugin from 'tailwindcss/plugin'

export const alignItems = plugin(({ addUtilities }) => {
  addUtilities({
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
  })
})
