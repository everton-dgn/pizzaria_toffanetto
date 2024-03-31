import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import eleganceUIUtilities from 'eleganceui-tailwind-utilities'

import {
  boxShadows,
  colors,
  keyframes,
  zIndex
} from './src/theme/variables'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors,
      zIndex: { ...defaultTheme.zIndex, ...zIndex },
      boxShadow: { ...defaultTheme.boxShadow, ...boxShadows },
      keyframes: { ...defaultTheme.keyframes, ...keyframes },
      fontFamily: {
        sans: 'var(--font-quicksand)'
      },
      aspectRatio: {
        ...defaultTheme.aspectRatio,
        '600/317': '600/317',
        '10/7': '10/7'
      },
      screens: {
        ...defaultTheme.screens,
        xs: '440px'
      }
    }
  },
  plugins: [...eleganceUIUtilities]
}

export default config
