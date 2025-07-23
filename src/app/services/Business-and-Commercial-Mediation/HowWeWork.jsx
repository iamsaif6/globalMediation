import React from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';

const HowWeWork = () => {
  return (
    <section className="py-10 px-5 md:px-16 md:py-[80px]">
      <SectionHeading
        title={'How to apply for Our training programmes'}
        // subTitle={'Ready to take the next step in your mediation career? Applying is simple:'}
        fullWidth={true}
      />
      <div className="grid grid-cols-3 gap-[18px] md:gap-8 my-10 md:my-[54px]">
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            1
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Start with a conversation</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">We listen, understand the situation and agree if mediation is the right next step.</span> <br />
          </p>
        </div>

        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            2
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Prepare and clarify</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">
              We make sure everyone knows what to expect — from who will be involved, to what outcomes could look like.
            </span>
          </p>
        </div>
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            3
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Facilitate safe, structured dialogue</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">We create space for people to express what matters, hear each other and explore a way forward.</span>
          </p>
        </div>
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            4
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Co-create outcomes that work</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">We support people to shape agreements that are realistic, clear and future-focused.</span>
          </p>
        </div>

        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            5
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Reflect and follow up</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">We check in post-mediation to support implementation and rebuild trust.</span>
          </p>
        </div>
      </div>
      <div className="flex md:justify-center">
        <p>Our process is voluntary, confidential and designed to minimise disruption — keeping you focused on what matters.</p>
      </div>
    </section>
  );
};

export default HowWeWork;
