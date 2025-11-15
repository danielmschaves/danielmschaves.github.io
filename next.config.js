/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use 'export' for static export (GitHub Pages) or 'standalone' for Docker
  output: process.env.DOCKER_BUILD ? 'standalone' : 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Only set basePath if deploying to GitHub Pages with a custom domain
  // For user/organization pages (username.github.io), basePath should be empty
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig

