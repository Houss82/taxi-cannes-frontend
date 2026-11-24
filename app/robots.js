const baseUrl = "https://www.cannestaxi.fr";

/**
 * Les robots restent autorisés à crawler pour constater les 410
 * sur les anciennes URL. Aucun bloquage global.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
