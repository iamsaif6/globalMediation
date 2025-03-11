import React from 'react';
import SectionHeading from '../shared/SectionHeading';

const Serving = () => {
  return (
    <section className="py-[80px] px-[60px]">
      <SectionHeading
        title={'Serving Communities Across the UK'}
        subTitle={
          'Global Mediation offers cost-effective, efficient and confidential mediation and disagreement resolution services for a broad range of personal or professional disputes.'
        }
      />
      <div className="py-[40px]">
        <div className="flex items-center justify-center gap-[136px] mb-[54px]">
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
          <div className="w-[75px] h-[90px] bg-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Serving;
