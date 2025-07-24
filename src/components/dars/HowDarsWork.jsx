import SectionHeading from '@/components/shared/SectionHeading';
import React from 'react';

const HowDarsWork = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px]">
      {/* <SectionHeading title={'How DARS Works'} center={true} /> */}

      <div className={`  max-w-[1200px] mx-auto   md:text-center `}>
        <h2 className={`font-medium w-full   mx-auto leading-[120%] tracking-[-4%] text-4xl text-center  md:text-5xl mb-5 md:mb-6 `}>
          How DARS works
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-[18px] md:gap-8 my-10 md:my-[54px]">
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6  col-span-4 md:col-span-2 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            1
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Initial contact</p>
          <p className="font-normal text-base md:text-lg">
            Reach out to our DARS team to discuss your situation and whether adjudication is appropriate.
          </p>
        </div>

        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6  col-span-4 md:col-span-2 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            2
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Assessment</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">
              Our trained team will review the case and recommend the best resolution route — mediation or adjudication.
            </span>
          </p>
        </div>
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6  col-span-4 md:col-span-2 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            3
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Mediation or adjudication session</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">
              For adjudication, each party submits a written statement. An impartial adjudicator reviews the submissions and prepares a
              decision.
            </span>
          </p>
        </div>
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6  col-span-4 md:col-span-2 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            4
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Resolution agreement</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">
              If appropriate, our team will prepare a formal outcome or agreement, based on the adjudicator’s findings.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowDarsWork;
