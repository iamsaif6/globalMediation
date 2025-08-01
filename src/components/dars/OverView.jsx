import React from 'react';
import service1 from '/public/DARS 1.jpg';
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
          <h2 className="font-medium text-4xl md:text-5xl leading-[120%]">Dispute adjudication and resolution service (DARS)</h2>
          <p className="text-[#667085] text-base md:text-lg leading-[150%] my-6">
            The Dispute Adjudication and Resolution Service (DARS) is a formal process designed to help people resolve complex
            disagreements, particularly where mediation hasn’t been possible or successful. <br /> <br /> DARS offers a structured,
            impartial service that allows both parties to present their perspectives in writing. A neutral decision is then made based on
            the information submitted.
            <br /> <br />
            Often used in SEND, education, workplace or civil matters, DARS is especially valuable when legal action would be
            disproportionate or distressing.
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
