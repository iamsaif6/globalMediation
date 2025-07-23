import Download from '@/components/blog/Download';
import CTA from '@/components/shared/CTA';
import React from 'react';

const Guides = () => {
  return (
    <section className="pb-16 pt-[100px] px-0 md:pb-[80px] md:px-[64px] bg-secondary text-white">
      <Download />
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'/contact-us'}
        Button1Text={'Enrol in a mediation training program today'}
        Button2Link={'/contact-us'}
        Button2Text={'Contact us for upcoming course dates'}
        className={'-mt-10'}
      />
    </section>
  );
};

export default Guides;
