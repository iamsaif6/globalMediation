import React from 'react';
import teamBG from '/public/global_2025-107.jpg';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const JoinGlobalTeam = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${teamBG.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className="px-5 md:px-16 py-[80px] md:py-[137px]"
    >
      <div className="grid grid-cols-2 text-white gap-[80px]">
        <div className="col-span-2 lg:col-span-1">
          <p className="text-base  font-medium">Careers</p>
          <h2 className="text-4xl md:text-5xl font-medium my-4 !text-white">Careers at Global Mediation</h2>
          <p className="text-base md:text-lg leading-[150%]">
            Would you love to help people navigate conflict with confidence and compassion?
            <br />
            We’re always on the lookout for thoughtful, talented people who share our values.
            <br />
            <br />
            While we’re not hiring for specific roles right now, we’d love to hear from you. <br /> Email:
            <Link href="mailto:send@globalmediation.co.uk">send@globalmediation.co.uk</Link> and we’ll get back to you.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-medium mb-8 !text-white">We regularly work with:</h3>
          <ul className="text-white text-base md:text-lg">
            <li>
              <Link
                href="mailto:anniw@globalmediation.co.uk?subject=Accredited%20mediators%20opportunity"
                className="flex border-t border-[#B4ABAB] py-[18px] pr-[13px] items-center justify-between"
              >
                <span>Accredited mediators</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:anniw@globalmediation.co.uk?subject=Mediation%20trainers%20opportunity"
                className="flex border-t border-[#B4ABAB] py-[18px] pr-[13px] items-center justify-between"
              >
                <span>Experienced mediation trainers</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:anniw@globalmediation.co.uk?subject=Administration%20opportunity"
                className="flex border-t border-b border-[#B4ABAB] py-[18px] pr-[13px] items-center justify-between"
              >
                <span>Specialist administrative support</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JoinGlobalTeam;
