const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

// Fetch All Article
export async function fetchArticles() {
  try {
    const response = await fetch(`${API_URL}/api/articles?populate=*`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }
    const result = await response.json();
    console.log('API response structure:', Object.keys(result));

    return result;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { data: [] };
  }
}

// Fethc article by slug
export async function fetchArticleBySlug(slug) {
  try {
    const response = await fetch(`${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.status}`);
    }
    const result = await response.json();
    return result.data && result.data.length > 0 ? result.data[0] : null;
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    return null;
  }
}
