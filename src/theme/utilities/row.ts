import plugin from 'tailwindcss/plugin'

export const row = plugin(({ addUtilities }) => {
  addUtilities({
    '.row': { display: 'flex', flexFlow: 'row wrap' }
  })
})
