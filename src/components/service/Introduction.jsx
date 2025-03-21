import Image from 'next/image';
import React from 'react';
import Introduction_Image from '/public/Introduction Overview of workplace mediation.png';

const Introduction = () => {
  return (
    <section>
      <div className=" py-16 px-5 md:px-16 md:py-[80px] grid grid-cols-2 gap-[80px]">
        <div className="relative mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          <div className={`from-[rgba(67,0,106,0.1)] to-[#43006a8e] absolute inset-0 bg-gradient-to-b  z-10`}></div>
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={Introduction_Image} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Introduction: Overview of workplace mediation</h1>
          <p className="text-[#667085] text-base md:text-lg leading-[150%] my-6">
            Workplace conflicts can disrupt productivity, strain relationships, and create a negative atmosphere. Global Mediation provides
            effective solutions to address these disputes, rebuild trust, and improve communication within teams. Our expert mediators work
            with organisations to resolve issues quickly and impartially, creating lasting resolutions that benefit everyone involved.
          </p>
          <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
            <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
            <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={Introduction_Image} />
          </div>
          <div>
            <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
            <ul className="text-[#667085] text-lg">
              <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Prevent costly disruptions and formal grievances.</span>
              </li>
              <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Improve morale and workplace satisfaction.</span>
              </li>
              <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Strengthen collaboration and communication.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
