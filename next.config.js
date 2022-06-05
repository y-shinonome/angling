/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dl.dropboxusercontent.com', 'images.microcms-assets.io'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
