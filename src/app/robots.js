export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/'], // Assuming standard things to disallow, though user just said allow marketing pages.
    },
    sitemap: 'https://www.globalmediation.co.uk/sitemap.xml',
  };
}
