// ✅ SERVER COMPONENT - Génération automatique du sitemap.xml
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import { getAllBlogPosts } from "../lib/blog";

export default function sitemap() {
  const baseUrl = "https://www.cannestaxi.fr";

  // 1. Pages statiques principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reservation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Articles de blog dynamiques avec dates réelles
  const blogPosts = getAllBlogPosts()
    .filter((post) => post.published !== false) // Exclure les brouillons si présent
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  // 3. Combiner toutes les URLs
  return [...staticPages, ...blogPosts];
}

