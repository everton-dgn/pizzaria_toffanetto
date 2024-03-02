import plugin from 'tailwindcss/plugin'

import { spacing } from '../variables'

export const gap = plugin(({ addUtilities }) => {
  const gaps: Record<string, { gap: string }> = {}
  Object.entries(spacing).forEach(([key, value]) => {
    gaps[`.g-${key}`] = { gap: `${value}` }
  })
  addUtilities(gaps)
})
