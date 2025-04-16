import MainServiesCard from '@/components/main-services/MainServiesCard';
import CTA from '@/components/shared/CTA';
import Header from '@/components/shared/Header';
import React from 'react';
import heaerImage from '/public/service_header.jpeg';
import Link from 'next/link';

const MainServices = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('${heaerImage.src}'), linear-gradient(to right, rgba(62,0,101,0.60) 1.68%, rgba(62,0,101,0.15) 69.4%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        className=" pt-[187px] h-screen relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[80%]">
          <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:[55px] lg:text-[65px] text-white">
            Global Mediation Services
          </h1>
          <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
            Professional mediation services to resolve disputes with empathy, clarity and care.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-4">
            <button
              className={`bg-primary border w-full md:w-auto border-primary font-normal text-lg text-[#FCFCFD] px-12 py-3 rounded-[40px]`}
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
