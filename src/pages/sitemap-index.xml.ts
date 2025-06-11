import { defineConfig } from 'astro/config';
import gamesData from '../data/games.json';

export async function GET() {
  const baseUrl = 'https://ddream11.com';
  const pages = [
    '',
    '/games',
    '/contact',
    '/faq',
    '/terms',
    '/privacy',
    '/responsible-gaming',
    '/fair-play'
  ];

  // 添加遊戲頁面
  Object.keys(gamesData).forEach(slug => {
    pages.push(`/games/${slug}`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
} 