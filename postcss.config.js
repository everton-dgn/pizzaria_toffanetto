const isProduction = process.env.NODE_ENV === 'production'

const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './src/app/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: ['html', 'body', /^S\./]
  }
]

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ],
    ...(isProduction ? [purgecss] : [])
  ]
}
