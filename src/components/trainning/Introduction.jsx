import Image from 'next/image';
import React from 'react';
import service1 from '/public/Training 1.png';
import Button from '../shared/Button';

const Introduction = () => {
  return (
    <section>
      <div className=" py-16 px-5 md:px-16 md:py-[80px] items-center grid grid-cols-2 gap-[80px]">
        <div className="relative mx-auto w-full lg:max-w-auto h-[303px] lg:h-[403px] max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          {/* <div className={`from-[rgba(67,0,106,0.1)] to-[#00a49e9b] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Introduction: Overview of Mediation Training</h1>
          <p className="text-[#667085] text-base md:text-lg leading-[150%] my-6">
            Whether you’re starting your mediation journey or expanding into specialist areas like SEND, our training programmes are
            designed to give you the practical tools and confidence to mediate with clarity, care and professionalism. <br /> <br />{' '}
            Delivered by experienced trainers, each course offers expert insight, immersive practice, and tailored support.
          </p>
          <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
            {/* <div className={`from-[rgba(67,0,106,0.1)] to-[#00a49e9b] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
            <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
          </div>
          <div>
            <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
            <ul className="text-[#667085] text-lg">
              <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Accredited by the Civil Mediation Council and the College of Mediators</span>
              </li>
              <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Hands-on learning through role plays, exercises and reflection</span>
              </li>
              <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Comprehensive support, including tutorials, coaching and feedback</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button title={'Start Your Mediation Journey Today'} href="/contact-us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
