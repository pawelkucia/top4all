export default defineEventHandler(async (event) => {
  const baseUrl = 'https://www.top4all.pl'
  
  // Define your routes
  const routes = [
    '',
    '/seo',
    '/google-ads',
    '/seo-audit',
    '/sem-audit',
    '/google-ads-audit',
    '/contact',
    '/privacy-policy'
  ]

  // Create sitemap content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`

  // Set response headers
  event.node.res.setHeader('content-type', 'application/xml')
  return sitemap
})