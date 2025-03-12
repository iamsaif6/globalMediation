import Header from '@/components/shared/Header';
import TeamPageCarousel from '@/components/team/teamPageCarousel';
import React from 'react';

const Team = () => {
  return (
    <div>
      <Header title={'Meet Our Team'} subTitle={'Direct users to reach out for consultations or general inquiries'} />
      <TeamPageCarousel />
    </div>
  );
};

export default Team;
