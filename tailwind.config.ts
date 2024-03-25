import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import * as customUtilities from 'eleganceui-tailwind-utilities'

import {
  colors,
  zIndex,
  spacings,
  fontWeights,
  fontSizes,
  boxShadows,
  borderRadius,
  screens,
  keyframes
} from './src/theme/variables'
import { utilities } from './src/theme/utilities'
import { components } from './src/theme/components'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors,
      screens,
      zIndex,
      borderRadius,
      fontWeight: fontWeights,
      fontSize: fontSizes,
      width: { ...defaultTheme.width, ...spacings },
      height: { ...defaultTheme.height, ...spacings },
      spacing: { ...defaultTheme.spacing, ...spacings },
      borderWidth: { ...defaultTheme.borderWidth, ...spacings },
      boxShadow: { ...defaultTheme.boxShadow, ...boxShadows },
      keyframes: { ...defaultTheme.keyframes, ...keyframes },
      fontFamily: {
        sans: 'var(--font-quicksand)'
      },
      aspectRatio: {
        ...defaultTheme.aspectRatio,
        '600/317': '600/317',
        '10/7': '10/7'
      }
    }
  },
  plugins: [...components, ...utilities, ...Object.values(customUtilities)]
}

export default config
