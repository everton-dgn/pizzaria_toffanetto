import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

import containerQueries from '@tailwindcss/container-queries'

import {
  colors,
  zIndex,
  spacing,
  fontWeight,
  fontSize,
  boxShadow,
  borderRadius,
  screens
} from './src/theme/variables'
import { utilities } from './src/theme/utilities'
import { components } from './src/theme/components'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens,
    spacing: { ...defaultTheme.spacing, ...spacing },
    colors: { ...defaultTheme.colors, ...colors },
    borderRadius: { ...defaultTheme.borderRadius, ...borderRadius },
    zIndex: { ...defaultTheme.zIndex, ...zIndex },
    fontWeight: { ...defaultTheme.fontWeight, ...fontWeight },
    boxShadow: { ...defaultTheme.boxShadow, ...boxShadow },
    width: { ...defaultTheme.width, ...spacing },
    height: { ...defaultTheme.height, ...spacing },
    fontSize,
    fontFamily: {
      sans: 'var(--font-quicksand)'
    },
    aspectRatio: {
      ...defaultTheme.aspectRatio,
      '600/317': '600/317',
      '10/7': '10/7'
    },
    extend: {}
  },
  plugins: [containerQueries, ...components, ...utilities]
} satisfies Config
