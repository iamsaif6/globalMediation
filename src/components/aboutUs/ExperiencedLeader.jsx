import React from 'react';
import service1 from '/public/about-global.jpeg';
import Image from 'next/image';

const ExperiencedLeader = () => {
  return (
    <div className="bg-[#F9F8FF] py-16 px-5 md:px-16 md:py-[80px] grid grid-cols-2 gap-[80px]">
      <div className="relative  hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
        {/* <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
        <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
      </div>
      <div className="col-span-2 flex justify-center  flex-col gap-9 lg:col-span-1">
        <h2 className="font-medium text-4xl md:text-5xl leading-[120%]">About Global Mediation</h2>
        <p className="text-black text-base md:text-lg leading-[150%] my-6">
          We exist to support people through difficult conversations, with calm, clarity and care. Our mediation services create space for
          progress, helping individuals, families, teams and organisations navigate conflict and reach resolution, without judgment or
          pressure.
        </p>
        <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
          <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
        </div>
      </div>
    </div>
  );
};

export default ExperiencedLeader;
