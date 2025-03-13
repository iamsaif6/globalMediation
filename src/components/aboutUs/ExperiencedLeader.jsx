import React from 'react';
import service1 from '/public/service1.jpg';
import Image from 'next/image';

const ExperiencedLeader = () => {
  return (
    <div className="bg-[#F9F8FF] py-16 px-5 md:px-16 md:py-[80px] grid grid-cols-2 gap-[80px]">
      <div className="relative  hidden md:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
        <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
        <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
      </div>
      <div className="col-span-2 md:col-span-1">
        <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Experienced Leader In Mediation</h1>
        <p className="text-[#667085] text-base md:text-lg leading-[150%] my-6">
          Global Mediation, established in 1999, is a leading provider of mediation services across the UK. Founded by barrister and
          mediator Adam Gersch, we offer a trusted alternative to litigation, helping individuals and organisations resolve conflicts
          efficiently, effectively, and amicably.
        </p>
        <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
          <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
        </div>
        <div>
          <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
          <ul className="text-[#667085] text-lg">
            <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
              <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
              <span>Over 20 years of experience in mediation services.</span>
            </li>
            <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
              <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
              <span>Accredited by the Civil Mediation Council and College of Mediators.</span>
            </li>
            <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
              <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
              <span>Trusted by families, businesses, local authorities, and community groups nationwide.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperiencedLeader;
