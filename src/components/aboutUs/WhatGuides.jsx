import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { HeartHandshake, IdCard, Puzzle, ShieldCheck } from 'lucide-react';

const WhatGuides = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px] ">
      <div className={` max-w-[850px] mx-auto text-left  md:text-center`}>
        <h2 className="font-medium leading-[120%] tracking-[-4%] text-4xl md:text-[40px] lg:text-5xl mb-5 md:mb-6">What guides our work</h2>
        <p className={`text-black text-base md:text-lg font-normal`}>
          Everything we do is shaped by the values that define our approach, and the way we support people through conflict.
        </p>
      </div>
      <div className="mt-[80px]">
        <h4 className="text-2xl font-medium text-center    mb-10">Our core values</h4>
        <div className="grid grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 col-span-3   lg:col-span-1 bg-[#F3F1FF] rounded-3xl">
            <div className="mt-3">
              <IdCard className="text-secondary" strokeWidth={1.2} size={45} />
            </div>
            <p className="font-medium my-[30px] lg:my-[40px] text-secondary   text-2xl">Authenticity</p>
            <p className=" text-lg    mb-[25px]  font-normal">We act with honesty and integrity in every conversation</p>
          </div>
          <div className="p-6 col-span-3   lg:col-span-1 bg-[#F3F1FF] rounded-3xl">
            <div className="mt-3">
              <ShieldCheck className="text-secondary" strokeWidth={1.2} size={45} />
            </div>
            <p className="font-medium my-[30px] lg:my-[40px] text-secondary   text-2xl">Dependability</p>
            <p className=" text-lg    mb-[25px] font-normal">We bring consistency, calm and clarity to challenging situations.</p>
          </div>
          <div className="p-6 col-span-3   lg:col-span-1 bg-[#F3F1FF] rounded-3xl">
            <div className="mt-3 ">
              <HeartHandshake className="text-secondary" strokeWidth={1.2} size={45} />
            </div>
            <p className="font-medium  text-secondary my-[30px] lg:my-[40px] text-2xl">Belonging</p>
            <p className=" text-lg  mb-[25px]  font-normal">
              We create safe, inclusive spaces where people feel heard, respected and supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGuides;
