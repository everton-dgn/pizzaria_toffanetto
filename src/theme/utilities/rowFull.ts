import plugin from 'tailwindcss/plugin'

export const rowFull = plugin(({ addUtilities }) => {
  addUtilities({
    '.row-full': { display: 'flex', flexFlow: 'row wrap', width: '100%' }
  })
})
