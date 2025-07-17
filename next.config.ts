import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjstest',
  assetPrefix: '/nextjstest/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig