import Header from '@/components/shared/Header';
import TeamPageCarousel from '@/components/team/teamPageCarousel';
import React from 'react';

export const metadata = {
  title: 'About - Global Mediation - Mediation Services UK',
  description:
    'Global Mediation was established in 1999. The company offers a wide range of mediation services UK, covering all aspects of personal and professional life.',
};

const Team = () => {
  return (
    <div>
      {/* <Header title={'Meet Our Team'} subTitle={'Direct users to reach out for consultations or general inquiries'} /> */}
      <TeamPageCarousel />
    </div>
  );
};

export default Team;
