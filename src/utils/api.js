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
    // First attempt: Try to find by slug
    let response = await fetch(`${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*&sort=updatedAt:desc`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });

    let result = await response.json();
    if (!result.data || result.data.length === 0) {
      const possibleId = parseInt(slug, 10);

      if (!isNaN(possibleId)) {
        response = await fetch(`${API_URL}/api/articles?filters[id][$eq]=${possibleId}&populate=*&sort=updatedAt:desc`, {
          cache: 'no-store',
          next: { revalidate: 0 },
        });

        if (response.ok) {
          result = await response.json();
          return result.data && result.data.length > 0 ? result.data[0] : null;
        }
      }
      return null;
    }
    return result.data[0];
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}
