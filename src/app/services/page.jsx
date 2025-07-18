import MainServiesCard from '@/components/main-services/MainServiesCard';
import CTA from '@/components/shared/CTA';
import React from 'react';
import heaerImage from '/public/services-final-header.png';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title: 'Services - Global Mediation',
  description:
    'Global Mediation offers cost-effective, efficient and confidential mediation services for a broad range of personal or professional disputes.',
};

const MainServices = () => {
  return (
    <div>
      <Head>
        <title>Services - Global Mediation</title>
        <meta name="description" content="" />

        <meta itemprop="name" content="Services - Global Mediation" />
        <meta itemprop="description" content="" />
        <meta itemprop="image" content="" />

        <meta property="og:url" content="https://www.globalmediation.co.uk/service" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services - Global Mediation" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Global Mediation" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>
      <header
        style={{
          backgroundImage: `url('${heaerImage.src}'), linear-gradient(to right, rgba(62,0,101,0.60) 1.68%, rgba(62,0,101,0.15) 69.4%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
        className=" pt-[187px] max-h-[1050px] h-screen relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
          <h1 className="font-semibold tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw] text-white">
            Global Mediation Services
          </h1>
          <p className="text-white mt-[25px] md:mt-4 mb-[25px] mr-auto max-w-[700px] md:mb-10 w-[100%] font-normal text-base md:text-lg xl:text-xl">
            Professional mediation services to resolve disputes with empathy, clarity and care.
          </p>
          <div className="flex md:block justify-center">
            <button
              className={`bg-primary inline-block border-primary font-semibold text-lg text-[#FCFCFD] px-[38px] py-3 rounded-3xl lg:rounded-[40px]`}
            >
              <Link className="w-full" href="/contact-us">
                Contact Us Today
              </Link>
            </button>
          </div>
        </div>
      </header>

      <MainServiesCard />
      <CTA
        title={'Ready to Resolve Your Dispute?'}
        subTitle={'Your trusted partner in conflict resolution'}
        Button1Text={'Schedule Consultation'}
        Button1Link={'/contact-us'}
        Button2Text={'Contact us'}
        Button2Link={'/contact-us'}
      />
    </div>
  );
};

export default MainServices;
