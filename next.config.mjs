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
        hostname: process.env.BASE_URL.split('//')[1] || 'backend',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: process.env.BASE_URL.split('//')[1] || 'backend',
        port: process.env.BASE_URL ? '' : '8000',
        pathname: '/media/**',
      },
    ],
  },
}

export default nextConfig
