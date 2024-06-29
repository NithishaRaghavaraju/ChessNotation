export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://learn-chess-notation.vercel.app/sitemap.xml',
    }
  }