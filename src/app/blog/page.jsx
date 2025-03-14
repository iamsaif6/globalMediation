import CaseStudy from '@/components/blog/CaseStudy';
import Posts from '@/components/blog/Posts';
import Header from '@/components/shared/Header';
import React from 'react';

const Blog = () => {
  return (
    <div>
      <Header
        title={'What is Mediation? '}
        subTitle={'A Comprehensive Guide to Alternative Dispute Resolution'}
        Button1Text={'Learn More'}
        Button1Link="#"
      />
      <Posts />
      <CaseStudy />
    </div>
  );
};

export default Blog;
