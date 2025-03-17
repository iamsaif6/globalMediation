import React from 'react';
import Button from '../shared/Button';
import TeamCarousel from '../home/TeamCarousel';
import Link from 'next/link';

const TeamMember = () => {
  return (
    <section className="py-16 about md:py-[80px]">
      <div className="grid px-5 md:px-16 grid-cols-2 gap-7 md:gap-[80px] mb-[80px]">
        <div className="col-span-2 lg:col-span-1">
          <h1 className="leading-[120%] text-4xl md:text-[40px] lg:text-5xl font-medium mb-8">Meet the Experts Behind Global Mediation</h1>
          <button
            className={`bg-primary border border-primary font-normal text-lg text-[#FCFCFD] w-full  md:w-auto px-12 py-3 rounded-[40px]`}
          >
            <Link className="w-full" href={'#'}>
              Meet our team
            </Link>
          </button>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="text-[#667085] text-base md:text-lg leading-[150%]">
            Our team includes experienced and accredited mediators specialising in workplace disputes, SEND mediation, family conflicts, and
            civil disputes. Each mediator brings a wealth of expertise, professionalism, and dedication to creating lasting solutions for
            our clients.
          </p>
          <div>
            <h3 className="md:text-2xl text-lg font-medium text-secondary mt-8 mb-8 ">Key benefits:</h3>
            <ul className="text-[#667085] text-lg space-y-4">
              <li className="flex items-center  gap-[26px] ">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Over 20 years of experience in mediation services.</span>
              </li>
              <li className="flex items-center  gap-[26px] ">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Accredited by the Civil Mediation Council and College of Mediators.</span>
              </li>
              <li className="flex items-center gap-[26px] ">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Trusted by families, businesses, local authorities, and community groups nationwide.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TeamCarousel darkText={true} />
    </section>
  );
};

export default TeamMember;
