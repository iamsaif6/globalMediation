import React from 'react';
import Button from '../shared/Button';

const TimeLine = () => {
  return (
    <section className="py-16 bg-[#F9F8FF] px-5 md:px-16 md:py-[80px]">
      <div className={` max-w-[950px] mx-auto text-left  md:text-center`}>
        <h2 className="font-medium leading-[120%] tracking-[-4%] text-4xl md:text-[40px] lg:text-5xl mb-5 md:mb-6">
          Trusted, experienced and people-first
        </h2>
        <p className={`text-black text-base md:text-lg font-normal`}>
          Global Mediation is an independent provider of professional mediation services, trusted by individuals, families, businesses and
          public bodies across the UK. We create safe, impartial spaces for people to communicate, rebuild trust and find lasting outcomes.
          With over 25 years of experience, our team of accredited mediators and trainers bring deep understanding, sector-specific
          knowledge and a commitment to fairness, accessibility and respect.
        </p>
      </div>

      <div className="my-[42px] md:my-[80px]">
        <h4 className="md:text-center text-secondary text-lg md:text-2xl font-semibold mb-10">Key milestones</h4>

        <div className="relative gap-[30px] flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/3 md:text-center relative z-10 flex md:block gap-8 items-center">
            <div className="flex relative items-center justify-center">
              <span className="block md:hidden  absolute -translate-x-1/2  h-[calc(100%+30px)] w-[2px] border-l-[2px] border-secondary border-dashed top-full left-1/2"></span>
              <svg className="w-[23px] h-[23px] md:w-[46px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 45" fill="none">
                <circle cx="22.499" cy="22.5" r="11.5" fill="#43006A" />
                <circle cx="22.667" cy="22.5" r="22.5" fill="#43006A" fillOpacity="0.17" />
              </svg>
            </div>
            <p className="md:mt-6 text-base md:text-lg leading-[150%]">
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
            <p className="md:mt-6  text-base md:text-lg leading-[150%]">
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
            <p className="md:mt-6  text-base md:text-lg leading-[150%]">
              Launched accredited training programs to develop the next generation of mediators
            </p>
          </div>

          <div className="absolute top-6 left-0 right-0 z-0">
            <div className="hidden md:block absolute left-[12%] right-[12%] top-0">
              <div className="absolute w-[40%] lg:w-[39%] left-9 lg:left-23 top-9 border-t-2 border-dashed border-secondary transform md:rotate-[17deg] lg:rotate-[10deg]"></div>
              <div className="absolute w-[40%] lg:w-[39%] right-9 lg:right-23 top-9 border-t-2 border-dashed border-secondary transform md:-rotate-[17deg]  lg:-rotate-[10deg]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button title={'Learn about mediation training'} href="/training" padding="large" />
      </div>
    </section>
  );
};

export default TimeLine;
