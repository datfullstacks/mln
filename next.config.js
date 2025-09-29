/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Remove output: 'export' for Vercel deployment
  // trailingSlash: true,
}

module.exports = nextConfig
