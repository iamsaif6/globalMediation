import React from 'react';
import teamBG from '/public/65.png';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const JoinGlobalTeam = () => {
  return (
    <section
      style={{
        backgroundImage: `url('${teamBG.src}'), linear-gradient(66deg, rgba(22, 163, 158, 0.94) -2.09%, rgba(100, 110, 110, 0.28) 58.06%)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="px-5 md:px-16 py-[80px] md:py-[137px]"
    >
      <div className="grid grid-cols-2 text-white gap-[80px]">
        <div className="col-span-2 lg:col-span-1">
          <p className="text-base font-medium">Careers</p>
          <h1 className="text-4xl md:text-5xl font-medium my-4">Join the Global Mediation Team</h1>
          <p className="text-base md:text-lg leading-[150%]">
            Are you passionate about conflict resolution? Global Mediation offers exciting career opportunities for mediators, trainers, and
            administrative professionals. Join us and contribute to creating peaceful resolutions for individuals and organisations.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-medium mb-8">Current Opportunities:</h3>
          <ul className="text-white text-base md:text-lg">
            <li>
              <Link href={'#'} className="flex border-t border-[#B4ABAB] py-[18px] pr-[13px] items-center justify-between">
                <span>Accredited Mediators</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link href={'#'} className="flex border-t border-[#B4ABAB] py-[18px] pr-[13px] items-center justify-between">
                <span>Mediation Trainers</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link href={'#'} className="flex border-t border-b border-[#B4ABAB] py-[18px] pr-[13px] items-center justify-between">
                <span>Accredited Mediators</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
          </ul>
          <div className="mt-10">
            <button
              className={`bg-primary border border-primary font-normal text-lg text-[#FCFCFD] px-12 w-full md:w-auto py-3 rounded-[40px]`}
            >
              <Link className="w-full" href={'#'}>
                Explore Career Opportunities
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinGlobalTeam;
