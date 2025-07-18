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
import Head from 'next/head';

const metaImg = 'https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2017/08/08144201/About.jpg';

export const metadata = {
  title: 'About - Global Mediation - Mediation Services UK',
  description:
    'Global Mediation was established in 1999. The company offers a wide range of mediation services UK, covering all aspects of personal and professional life.',
};

const AboutUs = () => {
  return (
    <div className="bg-[#F9F8FF]">
      <Head>
        <title>About - Global Mediation - Mediation Services UK</title>
        <meta
          name="description"
          content="Global Mediation was established in 1999. The company offers a wide range of mediation services UK, covering all aspects of personal and professional life."
        />

        <meta itemprop="name" content="About - Global Mediation - Mediation Services UK" />
        <meta
          itemprop="description"
          content="Global Mediation was established in 1999. The company offers a wide range of mediation services UK, covering all aspects of personal and professional life."
        />
        <meta
          itemprop="image"
          content="https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2017/08/08144201/About.jpg"
        />

        <meta property="og:url" content="https://www.globalmediation.co.uk/about/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About - Global Mediation - Mediation Services UK" />
        <meta
          property="og:description"
          content="Global Mediation was established in 1999. The company offers a wide range of mediation services UK, covering all aspects of personal and professional life."
        />
        <meta
          property="og:image"
          content="https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2017/08/08144201/About.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Global Mediation - Mediation Services UK" />
        <meta
          name="twitter:description"
          content="Global Mediation was established in 1999. The company offers a wide range of mediation services UK, covering all aspects of personal and professional life."
        />
        <meta
          name="twitter:image"
          content="https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2017/08/08144201/About.jpg"
        />
      </Head>
      <header
        style={{
          backgroundImage: `url('${headerBG.src}'), linear-gradient(to right, rgba(62,0,101,0.60) 1.68%, rgba(62,0,101,0.15) 69.4%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
        className=" pt-[187px] max-h-[1050px] h-screen bg-no-repeat relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full  lg:max-w-[1318px] mx-auto relative z-10 ">
          <h1 className="font-semibold tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw] text-white">
            Helping people find a way forward, together.
          </h1>
          {/* <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">{subTitle}</p> */}
          <div className=" flex mt-8 md:flex-row flex-col items-center gap-4">
            <button
              className={`bg-primary  max-w-[292px] lg:max-w-max w-full border block border-primary font-semibold text-lg text-[#FCFCFD] lg:px-12 py-3 rounded-[40px]`}
            >
              <Link className="w-full" href={'/contact-us'}>
                Contact us today
              </Link>
            </button>

            <button className=" block  lg:max-w-max bg-transparent font-semibold border border-white text-lg text-[#FCFCFD] lg:px-[48px] px-5 py-3 rounded-[40px] ">
              <Link className="w-full  " href={'/training'}>
                Learn about mediation training
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
      <div className="py-[40px] lg:py-[80px]">
        <FeedbackCarousel title={'What Our Clients Say'} />
      </div>
      <CTA
        title={'Let’s find a way forward, together'}
        subTitle={'For more information about our services, team, training programs, or career opportunities, get in touch with us .'}
        Button1Link={'/contact-us'}
        Button1Text={'Contact us'}
      />
    </div>
  );
};

export default AboutUs;
