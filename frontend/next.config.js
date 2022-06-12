/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  env: {
    WEBSOCKET_URL: process.env.WEBSOCKET_URL,
  },
  images: {
    domains: ['tailwindui.com', 'www.cryptomkt.com'],
  },
}

module.exports = withImages(nextConfig)
