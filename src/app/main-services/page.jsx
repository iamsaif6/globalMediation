import MainServiesCard from '@/components/main-services/MainServiesCard';
import CTA from '@/components/shared/CTA';
import Header from '@/components/shared/Header';
import React from 'react';

const MainServices = () => {
  return (
    <div>
      <Header
        title={'Global Mediation Services'}
        subTitle={'Professional mediation services to resolve disputes with empathy, expertise, and efficiency.'}
        Button1Text={'Contact Us Today'}
        Button1Link="/contact-us"
      />
      <MainServiesCard />
      <CTA
        title={'Ready to Resolve Your Dispute?'}
        subTitle={'Your trusted partner in conflict resolution'}
        Button1Text={'Schedule a Free Consultation Today'}
        Button1Link={'#'}
        Button2Text={'Contact us'}
        Button2Link={'/contact-us'}
      />
    </div>
  );
};

export default MainServices;
