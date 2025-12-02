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
  let blogPosts = [];
  try {
    const allPosts = getAllBlogPosts();
    blogPosts = allPosts
      .filter((post) => {
        // Inclure tous les articles sauf ceux explicitement non publiés
        return post.published !== false && post.slug;
      })
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }));
    
    // Log pour déboguer en production (sera visible dans les logs Vercel)
    if (process.env.NODE_ENV === 'production') {
      console.log(`[Sitemap] Found ${blogPosts.length} blog posts`);
      blogPosts.forEach(post => {
        console.log(`[Sitemap] Blog post: ${post.url}`);
      });
    }
  } catch (error) {
    // En cas d'erreur, on continue avec les pages statiques seulement
    console.error('[Sitemap] Error fetching blog posts:', error);
  }

  // 3. Combiner toutes les URLs
  return [...staticPages, ...blogPosts];
}

