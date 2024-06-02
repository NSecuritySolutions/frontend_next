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
        hostname: 'nssolution.sytes.net',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'nssolution.sytes.net',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
}

export default nextConfig
