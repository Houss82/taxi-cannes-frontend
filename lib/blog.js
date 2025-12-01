// ✅ SERVER-SIDE ONLY - Pas de "use client"
// Fonctions utilitaires pour lire et parser les articles de blog

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

// Fonction pour parser le frontmatter et le contenu Markdown
function parseMarkdownFile(fileContent) {
  const { data, content } = matter(fileContent);
  return {
    metadata: data,
    content: content,
  };
}

// Récupérer tous les articles du blog
export function getAllBlogPosts() {
  try {
    // Lire tous les fichiers .md du dossier blog
    const fileNames = fs.readdirSync(blogDirectory);
    
    const allPostsData = fileNames
      .filter((fileName) => {
        // Exclure le template, README et les fichiers cachés
        return fileName.endsWith('.md') && !fileName.startsWith('_') && fileName !== 'README.md';
      })
      .map((fileName) => {
        // Lire le contenu du fichier
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Parser le frontmatter et le contenu
        const { metadata, content } = parseMarkdownFile(fileContents);
        
        // Créer le slug à partir du nom de fichier
        const slug = fileName.replace(/\.md$/, '');
        
        return {
          slug,
          ...metadata,
          content,
        };
      })
      .sort((a, b) => {
        // Trier par date (plus récent en premier)
        return new Date(b.date) - new Date(a.date);
      });
    
    return allPostsData;
  } catch (error) {
    console.error('Erreur lors de la lecture des articles:', error);
    return [];
  }
}

// Récupérer un article par son slug
export function getBlogPostBySlug(slug) {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { metadata, content } = parseMarkdownFile(fileContents);
    
    return {
      slug,
      ...metadata,
      content,
    };
  } catch (error) {
    console.error('Erreur lors de la lecture de l\'article:', error);
    return null;
  }
}

// Récupérer les articles par catégorie
export function getBlogPostsByCategory(category) {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

// Récupérer les articles récents (limite)
export function getRecentBlogPosts(limit = 3) {
  const allPosts = getAllBlogPosts();
  return allPosts.slice(0, limit);
}

