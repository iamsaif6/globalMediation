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
      <TeamPageCarousel />
    </div>
  );
};

export default Team;
