import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: 'always',
      labelFormat: '[local]',
    },
  },
}

export default nextConfig
