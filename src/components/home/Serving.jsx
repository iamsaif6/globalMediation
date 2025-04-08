import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import Image from 'next/image';
import serving_image from '/public/Serving Communities Across the UK.png';

const Serving = () => {
  return (
    <section className="py-[64px] md:py-[60px] px-5 md:px-[60px]">
      <SectionHeading
        title={'Serving Communities Across the UK'}
        subTitle={
          'Global Mediation delivers impartial and accessible services to communities throughout the UK. We work across public, private and voluntary sectors, helping people from all walks of life approach conflict with confidence, and work toward solutions that feel fair, respectful and lasting'
        }
        center={true}
      />
      <div className="py-[40px] pb-0 md:pb-[40px]">
        <Image className="mx-auto" alt="Serving Communities Across the UK" src={serving_image} />
        {/* <div className="flex items-center justify-center gap-[136px] mb-[54px]">
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
        </div> */}
      </div>
    </section>
  );
};

export default Serving;
