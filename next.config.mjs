import withImages from 'next-images';

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    disableStaticImages: true
  }
};

export default withImages(nextConfig);
