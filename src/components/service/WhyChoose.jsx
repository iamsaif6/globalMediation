import React from 'react';
import wayChoose from '/public/jud-mackrill-Of_m3hMsoAA-unsplash.jpg';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px] text-white bg-secondary">
      <h1 className="text-4xl md:text-5xl font-medium text-center max-w-[760px] mx-auto leading-[120%] mb-8 md:mb-[38px]">
        Why choose Global Mediation for workplace conflicts?
      </h1>
      <p className=" text-lg text-center md:text-[20px] leading-[150%] mb-[56px] md:mb-[78px]">
        At Global Mediation, we understand the pressures and sensitivities involved in workplace dynamics. <br />
        Our accredited mediators bring a wealth of experience working across organisations of all sizes and sectors, supporting positive,
        lasting change. <br />
        We work neutrally, respectfully, and professionally, to help your team move forward.
      </p>
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
          <Image
            className="object-cover object-bottom  w-full h-full relative z-0"
            alt={'Experienced Leader In Mediation'}
            src={wayChoose}
          />
        </div>

        <div className="relative   lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={wayChoose} />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="mb-6 font-semibold text-lg md:text-2xl">Key advantages:</p>
          <ul className="space-y-6 text-base md:text-[20px]">
            <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
              <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
              <p className=" font-normal leading-[140%]">Experienced mediators with deep understanding of workplace challenges</p>
            </li>
            <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
              <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
              <p className="font-normal leading-[140%]">Tailored solutions for your organisation’s structure and culture</p>
            </li>
            <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
              <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
              <p className=" font-normal leading-[140%]">Proven success resolving workplace disputes across the UK</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
