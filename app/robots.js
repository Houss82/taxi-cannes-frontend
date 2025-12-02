// ✅ SERVER COMPONENT - Configuration robots.txt pour SEO
// Génère automatiquement /robots.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Routes API
          "/_next/", // Fichiers Next.js internes
        ],
      },
      {
        // Règle spécifique pour Googlebot
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "v",
  };
}
