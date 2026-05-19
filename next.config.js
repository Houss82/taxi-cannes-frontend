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
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

    /**
     * Cache mémoire en dev : le cache filesystem PackFileCacheStrategy peut
     * référencer des vendor-chunks déjà absents → Cannot find module
     * './vendor-chunks/framer-motion.js'. Pas config.cache=false (chunks instables).
     * Si problème persiste : `npm run dev:reset`.
     */
    if (dev) {
      config.cache = { type: 'memory' };
    }

    return config;
  },
}

module.exports = nextConfig
