export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://chess-notation-bay.vercel.app/sitemap.xml',
    }
  }