/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com"],
  },
};

module.exports = withImages(nextConfig);
