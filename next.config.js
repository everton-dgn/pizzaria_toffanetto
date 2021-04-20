const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: !isProd
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1300, 1500, 1700],
    iconSizes: [],
    domains: [],
    path: '/_next/image',
    loader: 'default'
  },
  reactStrictMode: true
})
