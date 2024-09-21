/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: process.env.BASE_URL || 'backend',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: process.env.BASE_URL || 'backend',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
}

export default nextConfig
