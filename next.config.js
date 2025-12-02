const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // S'assurer que le dossier content est inclus dans le build pour toutes les routes
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./content/**/*'],
    '/blog/**': ['./content/**/*'],
  },
}

module.exports = nextConfig
