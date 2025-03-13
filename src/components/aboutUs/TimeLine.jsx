import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';

const TimeLine = () => {
  return (
    <section className="py-16 bg-[#F9F8FF] px-5 md:px-16 md:py-[80px]">
      <SectionHeading
        title={'Our Journey to Becoming Mediation Experts'}
        subTitle={
          'Founded to provide a cost-effective and collaborative alternative to litigation, Global Mediation has grown into one of the UK’s most trusted mediation providers. Over the years, we’ve expanded to offer specialised services in workplace mediation, SEND mediation, family disputes, '
        }
      />
      <div className="my-[42px] md:my-[80px]">
        <h1 className="md:text-center text-secondary text-lg md:text-2xl font-semibold mb-10">Key Milestones</h1>

        <div className="relative gap-[30px] flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/3 md:text-center relative z-10 flex md:block gap-8 items-center">
            <div className="flex relative items-center justify-center">
              <span className="block md:hidden  absolute -translate-x-1/2  h-[calc(100%+30px)] w-[2px] border-l-[2px] border-secondary border-dashed top-full left-1/2"></span>
              <svg className="w-[23px] h-[23px] md:w-[46px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 45" fill="none">
                <circle cx="22.499" cy="22.5" r="11.5" fill="#43006A" />
                <circle cx="22.667" cy="22.5" r="22.5" fill="#43006A" fillOpacity="0.17" />
              </svg>
            </div>
            <p className="md:mt-6 text-[#667085] text-xs md:text-lg leading-[150%]">
              Established in 1999 to address gaps in accessible mediation services
            </p>
          </div>

          <div className="w-full md:w-1/3 md:text-center md:mt-20 relative z-10 flex md:block gap-8 items-center">
            <div className="flex relative items-center justify-center">
              <span className="block md:hidden absolute -translate-x-1/2  h-[calc(100%+30px)] w-[2px] border-l-[2px] border-secondary border-dashed top-full left-1/2"></span>
              <svg className="w-[23px] h-[23px] md:w-[46px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 45" fill="none">
                <circle cx="22.499" cy="22.5" r="11.5" fill="#43006A" />
                <circle cx="22.667" cy="22.5" r="22.5" fill="#43006A" fillOpacity="0.17" />
              </svg>
            </div>
            <p className="md:mt-6 text-[#667085] text-xs md:text-lg leading-[150%]">
              Expanded services to include specialised areas like SEND and community mediation
            </p>
          </div>

          <div className="w-full md:w-1/3 md:text-center relative z-10 flex md:block gap-8 items-center">
            <div className="flex items-center justify-center">
              <svg className="w-[23px] h-[23px] md:w-[46px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 45" fill="none">
                <circle cx="22.499" cy="22.5" r="11.5" fill="#43006A" />
                <circle cx="22.667" cy="22.5" r="22.5" fill="#43006A" fillOpacity="0.17" />
              </svg>
            </div>
            <p className="md:mt-6 text-[#667085] text-xs md:text-lg leading-[150%]">
              Launched accredited training programs to develop the next generation of mediators
            </p>
          </div>

          <div className="absolute top-6 left-0 right-0 z-0">
            <div className="hidden md:block absolute left-[12%] right-[12%] top-0">
              <div className="absolute w-[37%] left-23 top-8 border-t-2 border-dashed border-secondary transform rotate-[11deg]"></div>
              <div className="absolute w-[37%] right-23 top-8 border-t-2 border-dashed border-secondary transform -rotate-[11deg]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button title={'Learn about mediation training'} href="#" padding="large" />
      </div>
    </section>
  );
};

export default TimeLine;
