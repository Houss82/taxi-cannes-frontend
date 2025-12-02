// ✅ SERVER-SIDE ONLY - Pas de "use client"
// Fonctions utilitaires pour lire et parser les articles de blog

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Utiliser un chemin plus robuste qui fonctionne en développement et en production
function getBlogDirectory() {
  // Essayer plusieurs chemins possibles
  const possiblePaths = [
    path.join(process.cwd(), 'content/blog'),
    path.join(process.cwd(), 'frontend/content/blog'),
    path.join(__dirname, '../../content/blog'),
    path.join(__dirname, '../content/blog'),
  ];
  
  for (const dirPath of possiblePaths) {
    if (fs.existsSync(dirPath)) {
      console.log(`[Blog] Using directory: ${dirPath}`);
      return dirPath;
    }
  }
  
  // Retourner le chemin par défaut même s'il n'existe pas (pour les logs d'erreur)
  return path.join(process.cwd(), 'content/blog');
}

const blogDirectory = getBlogDirectory();

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
    // Vérifier que le dossier existe
    if (!fs.existsSync(blogDirectory)) {
      console.error(`[Blog] Directory does not exist: ${blogDirectory}`);
      console.error(`[Blog] Current working directory: ${process.cwd()}`);
      return [];
    }

    // Lire tous les fichiers .md du dossier blog
    const fileNames = fs.readdirSync(blogDirectory);
    
    if (fileNames.length === 0) {
      console.warn(`[Blog] No files found in directory: ${blogDirectory}`);
      return [];
    }
    
    const allPostsData = fileNames
      .filter((fileName) => {
        // Exclure le template, README et les fichiers cachés
        return fileName.endsWith('.md') && !fileName.startsWith('_') && fileName !== 'README.md';
      })
      .map((fileName) => {
        try {
          // Lire le contenu du fichier
          const fullPath = path.join(blogDirectory, fileName);
          
          if (!fs.existsSync(fullPath)) {
            console.warn(`[Blog] File does not exist: ${fullPath}`);
            return null;
          }
          
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
        } catch (fileError) {
          console.error(`[Blog] Error reading file ${fileName}:`, fileError);
          return null;
        }
      })
      .filter((post) => post !== null) // Filtrer les erreurs
      .sort((a, b) => {
        // Trier par date (plus récent en premier)
        const dateA = a.date ? new Date(a.date) : new Date(0);
        const dateB = b.date ? new Date(b.date) : new Date(0);
        return dateB - dateA;
      });
    
    // Log pour déboguer
    if (process.env.NODE_ENV === 'production') {
      console.log(`[Blog] Found ${allPostsData.length} blog posts`);
    }
    
    return allPostsData;
  } catch (error) {
    console.error('[Blog] Erreur lors de la lecture des articles:', error);
    console.error('[Blog] Blog directory:', blogDirectory);
    console.error('[Blog] Current working directory:', process.cwd());
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

// Récupérer tous les slugs d'articles (pour sitemap)
export function getAllPostSlugs() {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(blogDirectory);
    return fileNames
      .filter((fileName) => {
        return fileName.endsWith('.md') && !fileName.startsWith('_') && fileName !== 'README.md';
      })
      .map((fileName) => ({
        slug: fileName.replace(/\.md$/, ''),
      }));
  } catch (error) {
    console.error('Erreur lors de la récupération des slugs:', error);
    return [];
  }
}

