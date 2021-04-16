module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1300, 1500, 1700],
    iconSizes: [],
    domains: [],
    path: '/_next/image',
    loader: 'default'
  },
  // distDir: 'build',
  generateBuildId: async () => {
    return 'my-build-id'
  },
  reactStrictMode: true
}
