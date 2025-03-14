import SectionHeading from '@/components/shared/SectionHeading';
import React from 'react';

const HowDarsWork = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px]">
      <SectionHeading title={'How DARS Works'} center={true} />
      <div className="grid grid-cols-4 gap-[18px] md:gap-8 my-10 md:my-[54px]">
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6  col-span-4 md:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            1
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Initial Contact</p>
          <p className="font-normal text-base md:text-lg">
            Reach out to our DARS team via phone or email to discuss your conflict and determine if mediation is right for you.
          </p>
        </div>

        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6  col-span-4 md:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            2
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Assessment</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">
              Our mediators assess the details of the dispute to recommend the best resolution process, whether mediation or adjudication.
            </span>
          </p>
        </div>
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6  col-span-4 md:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            3
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Mediation or Adjudication Session</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">
              Sessions are facilitated by trained professionals to ensure all parties have the opportunity to present their perspectives and
              work toward an agreement.
            </span>
          </p>
        </div>
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6  col-span-4 md:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            4
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Resolution Agreement</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">
              If a resolution is reached, our mediators help formalize the agreement, ensuring all parties are satisfied with the outcome.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowDarsWork;
