import { fetchArticles } from '@/utils/api';

const URL = 'https://www.globalmediation.co.uk';

export default async function sitemap() {
  const links = [
    { url: `${URL}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: `${URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${URL}/business`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/civil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/Community-Mediation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${URL}/complaints-comments-compliments-policy-2015--`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    { url: `${URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/cookie-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${URL}/csq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${URL}/dars`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/dars-csq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    {
      url: `${URL}/dars-facilitator-evaluation-form`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    { url: `${URL}/data-protection-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${URL}/diversity-mon-form`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${URL}/family-mediation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/faqs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/global-brand-value`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/login`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${URL}/mediator-evaluation-form`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${URL}/nhs-mediation-scheme`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/privacy-statement`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${URL}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/savings-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/send-mediation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/training`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${URL}/Workplace-and-Employment-Mediation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  try {
    const articles = await fetchArticles();
    if (articles && articles.data) {
      const blogPosts = articles.data.map((post) => ({
        url: `${URL}/blog/${post.attributes.slug}`,
        lastModified: new Date(post.attributes.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
      return [...links, ...blogPosts];
    }
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error);
  }

  return links;
}
