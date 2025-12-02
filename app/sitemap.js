// ✅ SERVER COMPONENT - Génération automatique du sitemap.xml
// Pas de cache pour s'assurer que les nouveaux articles apparaissent immédiatement
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Pas de cache du tout

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
    // Logs détaillés pour déboguer en production
    console.log(`[Sitemap] Starting blog posts fetch...`);
    console.log(`[Sitemap] NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`[Sitemap] Process cwd: ${process.cwd()}`);
    
    const allPosts = getAllBlogPosts();
    console.log(`[Sitemap] getAllBlogPosts returned ${allPosts.length} posts`);
    
    blogPosts = allPosts
      .filter((post) => {
        // Inclure tous les articles sauf ceux explicitement non publiés
        const isValid = post.published !== false && post.slug;
        if (!isValid) {
          console.log(`[Sitemap] Filtered out post: ${post.slug} (published: ${post.published})`);
        }
        return isValid;
      })
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }));
    
    // Log pour déboguer (toujours actif pour voir dans les logs Vercel)
    console.log(`[Sitemap] Final blog posts count: ${blogPosts.length}`);
    blogPosts.forEach(post => {
      console.log(`[Sitemap] Blog post URL: ${post.url}`);
    });
    
    if (blogPosts.length === 0) {
      console.warn(`[Sitemap] WARNING: No blog posts found! Check logs above.`);
    }
  } catch (error) {
    // En cas d'erreur, on continue avec les pages statiques seulement
    console.error('[Sitemap] ERROR fetching blog posts:', error);
    console.error('[Sitemap] Error stack:', error.stack);
  }

  // 3. Combiner toutes les URLs
  return [...staticPages, ...blogPosts];
}

