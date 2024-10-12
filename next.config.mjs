/** @type {import('next').NextConfig} */
const url = process.env.BASE_URL.split('//')[1]
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
        hostname: url || 'backend',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: url || 'backend',
        port: url ? '' : '8000',
        pathname: '/media/**',
      },
    ],
  },
}

export default nextConfig
