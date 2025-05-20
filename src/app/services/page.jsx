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
          backgroundPosition: 'center center',
        }}
        className=" pt-[187px] h-screen relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
          <h1 className="font-semibold tracking-[-4%] max-w-[800px] leading-[120%] text-5xl md:[55px] lg:text-[65px] text-white">
            Global Mediation Services
          </h1>
          <p className="text-white max-w-[700px] mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
            Professional mediation services to resolve disputes with empathy, clarity and care.
          </p>
          <div className="">
            <button
              className={`bg-primary inline-block border-primary font-normal text-lg text-[#FCFCFD] px-[38px] py-3 rounded-3xl lg:rounded-[40px]`}
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
        Button1Text={'Schedule a Free Consultation Today'}
        Button1Link={'#'}
        Button2Text={'Contact us'}
        Button2Link={'/contact-us'}
      />
    </div>
  );
};

export default MainServices;
