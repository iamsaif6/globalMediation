import Header from '@/components/shared/Header';
import React from 'react';
import aboutUSHeader from '/public/aboutUsHeader.png';
import ExperiencedLeader from '@/components/aboutUs/ExperiencedLeader';
import TimeLine from '@/components/aboutUs/TimeLine';
import Colabration from '@/components/aboutUs/Colabration';
import TeamMember from '@/components/aboutUs/TeamMember';
import Accredited from '@/components/aboutUs/Accredited';
import JoinGlobalTeam from '@/components/aboutUs/JoinGlobalTeam';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import CTA from '@/components/shared/CTA';
import Progress from '@/components/aboutUs/Progress';
import Origins from '@/components/aboutUs/Origins';
import WhatGuides from '@/components/aboutUs/WhatGuides';
import headerBG from '/public/aboutus_header.jpg';

const AboutUs = () => {
  return (
    <div className="bg-[#F9F8FF]">
      <Header
        title={'Helping People Find a Way Forward , Together'}
        subTitle={null}
        Button1Text={'Contact Us Today'}
        Button1Link={'#'}
        Button2Text={'Learn About Mediation Training'}
        Button2Link="#"
        cover={headerBG}
      />
      <ExperiencedLeader />
      <TimeLine />
      <Progress />
      <Colabration />
      <Origins />
      <WhatGuides />
      <TeamMember />
      <Accredited />
      <JoinGlobalTeam />
      <FeedbackCarousel title={'What Our Clients Say'} />
      <CTA
        title={'Let’s find a way forward, together'}
        subTitle={'For more information about our services, team, training programs, or career opportunities, get in touch with us:'}
        Button1Link={'#'}
        Button1Text={'Contact us'}
      />
    </div>
  );
};

export default AboutUs;
