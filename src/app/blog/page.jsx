// Blog.jsx - Server Component
import Posts from '@/components/blog/Posts';
import CTA from '@/components/shared/CTA';
import { fetchArticles } from '@/utils/api';
import React from 'react';

const Blog = async () => {
  const articles = await fetchArticles();

  return (
    <div>
      <Posts articles={articles} />
      <CTA
        title={'Start your Mediation Training journey today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'/contact'}
        Button1Text={'Enrol in a mediation training program today'}
        Button2Link={'/contact'}
        Button2Text={'Contact us for upcoming course dates'}
      />
    </div>
  );
};

export default Blog;
