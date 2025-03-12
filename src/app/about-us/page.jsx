import Header from '@/components/shared/Header';
import React from 'react';
import aboutUSHeader from '/public/aboutUsHeader.png';
import ExperiencedLeader from '@/components/aboutUs/ExperiencedLeader';
import TimeLine from '@/components/aboutUs/TimeLine';

const AboutUs = () => {
  return (
    <div>
      <Header
        title={'About Global Mediation'}
        subTitle={
          'Discover how Global Mediation resolves conflicts, empowers individuals, and fosters collaboration through professional mediation services and training.'
        }
        Button1Text={'Contact Us Today'}
        Button1Link={'#'}
        Button2Text={'Learn About Mediation Training'}
        Button2Link="#"
        cover={aboutUSHeader.src}
      />
      <ExperiencedLeader />
      <TimeLine />
    </div>
  );
};

export default AboutUs;
