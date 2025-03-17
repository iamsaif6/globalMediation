import Image from 'next/image';
import React from 'react';
import service1 from '/public/A Better Way.jpg';
import Button from '../shared/Button';

const Introduction = () => {
  return (
    <section>
      <div className=" py-16 px-5 md:px-16 md:py-[80px] grid grid-cols-2 gap-[80px]">
        <div className="relative lg:max-w-max max-w-[600px] mx-auto  hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Introduction: Overview of mediation training</h1>
          <p className="text-[#667085] text-base md:text-lg leading-[150%] my-6">
            Unlock the skills needed to mediate disputes effectively with Global Mediation’s comprehensive training programs. Whether you’re
            new to mediation or looking to specialise in areas like SEND mediation, our accredited courses offer practical learning
            opportunities delivered by experienced trainers.
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
                <span>Accredited by the Civil Mediation Council and the College of Mediators.</span>
              </li>
              <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Hands-on learning through role plays, exercises, and reflective sessions.</span>
              </li>
              <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Comprehensive support, including individual tutorials and coaching.</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button title={'Start Your Mediation Journey Today'} href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
