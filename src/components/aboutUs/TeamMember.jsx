import React from 'react';
import TeamCarousel from '../home/TeamCarousel';
import Link from 'next/link';

const TeamMember = () => {
  return (
    <section className="py-16 about md:py-[80px]">
      <div className="grid px-5 md:px-16 grid-cols-2 gap-7 md:gap-[80px] mb-[80px]">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="leading-[120%] text-4xl md:text-[40px] lg:text-5xl font-medium mb-8">The people behind Global Mediation</h2>
          {/* <button
            className={`bg-primary border border-primary font-normal text-lg text-[#FCFCFD] w-full  md:w-auto px-12 py-3 rounded-[40px]`}
          >
            <Link className="w-full" href={'/team'}>
              Meet our team
            </Link>
          </button> */}
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="text-black text-base md:text-lg leading-[150%] mt-3">
            Our team includes accredited, experienced mediators from a wide range of backgrounds. We are committed to building connection,
            understanding and resolution through every conversation we lead.
          </p>
          {/* <div>
            <h3 className="md:text-2xl text-lg font-medium text-secondary mt-8 mb-8 ">Key benefits:</h3>
            <ul className="text-[#667085] text-lg space-y-4">
              <li className="flex items-center  gap-[26px] ">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Expertise in diverse areas of mediation</span>
              </li>
              <li className="flex items-center  gap-[26px] ">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Accredited by leading organisations, including the Civil Mediation Council.</span>
              </li>
              <li className="flex items-center gap-[26px] ">
                <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                <span>Committed to delivering impartial and empathetic support.</span>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <TeamCarousel isDouble={true} darkText={true} />
    </section>
  );
};

export default TeamMember;
