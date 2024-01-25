/**
 * @type {import('next').NextConfig}
 */

const withPWA = require("@ducanh2912/next-pwa").default({
  // disable: process.env.NODE_ENV === "development",
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  fallbacks: {
    document: "/offline"
  },
  workboxOptions: {
    disableDevLogs: true
  }
})

const headers = [
  {
    source: '/images/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable'
      }
    ]
  },
  {
    source: '/:path*',
    headers: [
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      }
    ]
  }
]

const nextConfig = {
  headers: async () => headers,
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost'
    }],
    formats: ['image/webp'],
    loader: 'default',
    path: '/_next/image'
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
}

module.exports = withPWA(nextConfig)
