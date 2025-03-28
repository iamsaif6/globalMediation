import React from 'react';
import wayChoose from '/public/Training 1.png';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px] text-white bg-secondary">
      <h1 className="text-4xl md:text-5xl font-medium text-center max-w-[760px] mx-auto leading-[120%] mb-8 md:mb-[78px]">
        Why Choose Global Mediation for Workplace Conflicts?
      </h1>
      <p className=" text-lg md:text-[20px] leading-[150%] mb-[56px] md:mb-[78px]">
        At Global Mediation, we understand the complexities of workplace dynamics. Our expert mediators bring a wealth of experience to
        address conflicts in a neutral, confidential, and impartial manner. By fostering open communication, we help organisations achieve
        long-term resolutions that strengthen relationships and improve productivity.
      </p>
      <div className="grid grid-cols-2 gap-8">
        <div className="hidden md:block md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden h-[327px] w-full  lg:max-w-[420px] bg-blue-900">
          <Image alt="Why Choose Global Mediation for Workplace Conflicts" className="object-cover h-full w-full" src={wayChoose} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="mb-6 font-semibold text-lg md:text-2xl">Key Advantages:</p>
          <ul className="space-y-6 text-base md:text-[20px]">
            <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
              <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
              <p className=" font-normal leading-[140%]">Experienced mediators with a deep understanding of workplace issues.</p>
            </li>
            <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
              <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
              <p className="font-normal leading-[140%]">Tailored solutions to suit your business needs.</p>
            </li>
            <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
              <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
              <p className=" font-normal leading-[140%]">A proven track record of successful outcomes.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
