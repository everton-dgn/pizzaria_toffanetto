/**
 * @type {import('next').NextConfig}
 */

const withPWA = require('@ducanh2912/next-pwa').default({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  fallbacks: {
    document: '/offline'
  },
  workboxOptions: {
    disableDevLogs: true
  }
})

const nextConfig = {
  images: {
    deviceSizes: [450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost'
    }],
    formats: ['image/webp'],
    loader: 'default',
    path: '/_next/image'
  },
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = withPWA(nextConfig)
