import MediationCalculation from '@/components/home/MediationCalculation';
import React from 'react';

export const metadata = {
  title: 'Saving Calculator | Global Mediation - Mediation Services in London & Nationwide',
  description:
    'An advanced course for qualified mediators, wishing to carry out mediations in the field of special educational needs and disability .',
};

const page = () => {
  return (
    <div className="py-10 px-5 md:px-16 mt-16 md:py-[80px]">
      <MediationCalculation></MediationCalculation>
    </div>
  );
};

export default page;
