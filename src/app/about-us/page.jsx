import Header from '@/components/shared/Header';
import React from 'react';
import aboutUSHeader from '/public/aboutUsHeader.png';
import ExperiencedLeader from '@/components/aboutUs/ExperiencedLeader';
import TimeLine from '@/components/aboutUs/TimeLine';
import Colabration from '@/components/aboutUs/Colabration';
import TeamMember from '@/components/aboutUs/TeamMember';
import Accredited from '@/components/aboutUs/Accredited';
import JoinGlobalTeam from '@/components/aboutUs/JoinGlobalTeam';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import CTA from '@/components/shared/CTA';
import Progress from '@/components/aboutUs/Progress';
import Origins from '@/components/aboutUs/Origins';
import WhatGuides from '@/components/aboutUs/WhatGuides';
import headerBG from '/public/aboutus_header.jpg';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="bg-[#F9F8FF]">
      <header
        style={{
          backgroundImage: `url('${headerBG.src}'), linear-gradient(to right, rgba(62,0,101,0.60) 1.68%, rgba(62,0,101,0.15) 69.4%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
        className=" pt-[187px] h-screen bg-no-repeat relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[80%]">
          <h1 className="font-semibold mb-8 tracking-[-4%] leading-[120%] text-5xl md:[55px] lg:text-[65px] text-white">
            Helping People Find a Way Forward , Together
          </h1>
          {/* <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">{subTitle}</p> */}
          <div className="flex md:flex-row flex-col items-center gap-4">
            <button
              className={`bg-primary border w-full md:w-auto border-primary font-normal text-lg text-[#FCFCFD] px-12 py-3 rounded-[40px]`}
            >
              <Link className="w-full" href={'#'}>
                Contact Us Today
              </Link>
            </button>

            <button className=" w-full md:w-auto bg-transparent font-normal border border-white text-lg text-[#FCFCFD] px-[48px] py-3 rounded-[40px] ">
              <Link className="w-full  " href={'#'}>
                Learn About Mediation Training
              </Link>
            </button>
          </div>
        </div>
      </header>
      <ExperiencedLeader />
      <TimeLine />
      <Progress />
      <Colabration />
      <Origins />
      <WhatGuides />
      <TeamMember />
      <Accredited />
      <JoinGlobalTeam />
      <FeedbackCarousel title={'What Our Clients Say'} />
      <CTA
        title={'Let’s find a way forward, together'}
        subTitle={'For more information about our services, team, training programs, or career opportunities, get in touch with us:'}
        Button1Link={'#'}
        Button1Text={'Contact us'}
      />
    </div>
  );
};

export default AboutUs;
