/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Next.js Image Optimization Cache - 7 Days (604,800 seconds)
  images: {
    minimumCacheTTL: 604800,
  },

  // 2. HTTP Browser Cache-Control Headers for Static Assets (7 Days)
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/favicon/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
}

module.exports = nextConfig
