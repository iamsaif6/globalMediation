import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header
        style={{
          backgroundImage: ` url('/image.jpg')`,
          backgroundRepeat: 'no-repeat',
        }}
        className="pt-[187px] max-h-[1050px] h-screen custom-gradient-bg bg-[center] sm:bg-[center_top] lg:bg-bottom max-sm:bg-[65%_center] relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        {/* <Image src={overlay} alt="Header Overlay" className=" absolute top-0 left-0 w-full h-full object-cover" /> */}
        <div className="w-full text-left lg:pl-5 relative z-10 lg:max-w-[1318px] mx-auto ">
          <h1 className=" font-semibold tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw] text-white">
            Every Voice Matters. <br /> Every Story Counts.
          </h1>
          <p className="text-white mt-[25px] md:mt-4 mb-[25px] mr-auto max-w-[700px] md:mb-10 w-[100%] font-normal text-base md:text-lg xl:text-xl">
            Impartial, professional mediation that helps you resolve disputes, rebuild trust, and find common ground.
          </p>
          <div className="flex md:block justify-center">
            <Link
              title="Explore Our Services"
              className={`bg-primary inline-block  border md:w-auto border-primary font-semibold text-lg text-[#FCFCFD] px-[37px] py-3 rounded-[40px]`}
              href="/services"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
