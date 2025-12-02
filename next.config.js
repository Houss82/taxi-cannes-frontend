/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // S'assurer que le dossier content est inclus dans le build
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./content/**/*'],
  },
}

module.exports = nextConfig

