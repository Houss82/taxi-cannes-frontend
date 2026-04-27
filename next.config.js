const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * Ne pas sur-agresser onDemandEntries : un buffer trop faible peut éjecter des
   * chunks encore demandés par le navigateur → 404 sur /_next/static en dev.
   * Valeurs proches des défauts Next (stables).
   */
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 8,
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

    /**
     * Ne PAS mettre config.cache = false en dev : ça régénère des noms de chunks
     * de façon instable pendant que le navigateur garde d’anciennes URLs → 404.
     * Si un souci CSS/Tailwind réapparaît : `npm run dev:reset` puis relancer.
     */
    return config;
  },
}

module.exports = nextConfig
