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
      <Colabration />
      <TeamMember />
      <Accredited />
      <JoinGlobalTeam />
      <FeedbackCarousel title={'What Our Clients Say'} />
      <CTA
        title={'Learn More About Global Mediation'}
        subTitle={'For more information about our services, team, training programs, or career opportunities, get in touch with us:'}
        Button1Link={'#'}
        Button1Text={'Contact us today'}
      />
    </div>
  );
};

export default AboutUs;
