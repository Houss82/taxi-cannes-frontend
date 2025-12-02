import { getAllPostSlugs, getAllPosts } from "@/lib/blog";

const baseUrl = "https://www.cannestaxi.fr";

export default function sitemap() {
  const now = new Date();
  const allPosts = getAllPosts();

  // Créer un map pour accéder rapidement aux dates des articles
  const postDatesMap = {};
  allPosts.forEach((post) => {
    postDatesMap[post.slug] = post.date ? new Date(post.date) : now;
  });

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/tarifs", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/reservation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogPosts = getAllPostSlugs().map(({ slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: postDatesMap[slug] || now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
