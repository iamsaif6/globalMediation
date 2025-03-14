import CaseStudy from '@/components/blog/CaseStudy';
import Download from '@/components/blog/Download';
import Posts from '@/components/blog/Posts';
import CTA from '@/components/shared/CTA';
import Header from '@/components/shared/Header';
import React from 'react';

const Blog = () => {
  return (
    <div className="">
      <Header
        title={'What is Mediation? '}
        subTitle={'A Comprehensive Guide to Alternative Dispute Resolution'}
        Button1Text={'Learn More'}
        Button1Link="#"
      />
      <Posts />
      <CaseStudy />
      <Download />
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'#'}
        Button1Text={'Enrol in a Mediation Training Program Today'}
        Button2Link={'#'}
        Button2Text={'Contact Us for Upcoming Course Dates'}
      />
    </div>
  );
};

export default Blog;
