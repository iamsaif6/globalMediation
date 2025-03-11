import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import MediationCard from './MediationCard';

const MediationCards = () => {
  return (
    <section className="px-5 md:px-[58px] py-[80px]">
      <SectionHeading
        title={'Mediation that Works for You'}
        subTitle={
          'Global Mediation delivers impartial, confidential, and cost-effective solutions to help you navigate disputes and achieve lasting resolutions.'
        }
      />
      <div className=" mt-12 md:mt-20 flex flex-col md:flex-row gap-6 md:gap-4">
        <MediationCard
          title={'Voluntary'}
          subTitle={
            'Mediation empowers all parties to choose their path forward. Participation is always by mutual agreement, fostering trust and collaboration.'
          }
        />
        <MediationCard
          title={'Voluntary'}
          subTitle={
            'Mediation empowers all parties to choose their path forward. Participation is always by mutual agreement, fostering trust and collaboration.'
          }
        />
        <MediationCard
          title={'Voluntary'}
          subTitle={
            'Mediation empowers all parties to choose their path forward. Participation is always by mutual agreement, fostering trust and collaboration.'
          }
        />
        <MediationCard
          title={'Voluntary'}
          subTitle={
            'Mediation empowers all parties to choose their path forward. Participation is always by mutual agreement, fostering trust and collaboration.'
          }
        />
      </div>
    </section>
  );
};

export default MediationCards;
