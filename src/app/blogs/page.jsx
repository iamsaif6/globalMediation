// Blog.jsx - Server Component
import Posts from '@/components/blog/Posts';
import CTA from '@/components/shared/CTA';
import { fetchArticles } from '@/utils/api';
import React from 'react';

const Blog = async () => {
  const articles = await fetchArticles();

  return (
    <div className="">
      <Posts articles={articles} />
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'/contact-us'}
        Button1Text={'Enrol in a mediation training program today'}
        Button2Link={'/contact-us'}
        Button2Text={'Contact us for upcoming course dates'}
      />
    </div>
  );
};

export default Blog;
