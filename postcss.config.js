/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    ...(process.env.NODE_ENV !== 'production' ? { cssnano: {} } : {})
  }
}
