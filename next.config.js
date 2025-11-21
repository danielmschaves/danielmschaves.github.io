/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use 'standalone' for Docker builds if needed, otherwise default (dynamic)
  output: process.env.DOCKER_BUILD ? 'standalone' : undefined,
  trailingSlash: true,
  // Only set basePath if deploying to GitHub Pages with a custom domain
  // For user/organization pages (username.github.io), basePath should be empty
  basePath: '',
  assetPrefix: '',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

