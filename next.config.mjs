import withImages from 'next-images'

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
}

export default withImages(nextConfig)
