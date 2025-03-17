import React from 'react';
import service1 from '/public/service1.jpg';
import Image from 'next/image';
const OverView = () => {
  return (
    <section>
      <div className=" py-16 px-5 md:px-16 md:py-[80px] grid grid-cols-2 gap-[80px]">
        <div className="relative max-h-[480px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Overview : Dispute Adjudication and Resolution Service (DARS)</h1>
          <p className="text-[#667085] text-base md:text-lg leading-[150%] my-6">
            The Dispute Adjudication and Resolution Service (DARS) is a specialized mediation and adjudication service exclusively available
            in Northern Ireland. DARS offers impartial and professional conflict resolution, designed to help parties reach agreements
            without the need for lengthy legal proceedings.
            <br className="mb-2" />
            Whether addressing workplace disputes, community conflicts, or other civil disagreements, DARS provides a confidential and
            collaborative platform to resolve issues efficiently.
          </p>
          <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
            <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
            <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
