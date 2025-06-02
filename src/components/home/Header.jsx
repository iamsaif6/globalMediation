import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header
        style={{
          backgroundImage: ` url('/image.jpg')`,
          backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'top center',
        }}
        className="pt-[187px] h-screen custom-gradient-bg bg-[center] sm:bg-[center_top] max-sm:bg-[65%_center] relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full text-left lg:pl-5 relative z-10 lg:max-w-[1318px] mx-auto ">
          {/* <h1 className="hidden md:block font-semibold tracking-[-4%] max-w-[700px] leading-[120%] text-5xl md:[65px] lg:text-[72px] text-white">
            Helping People Move Forward
          </h1> */}
          <h1 className=" font-semibold tracking-[-4%] max-w-[900px] leading-[120%] text-5xl md:[65px] lg:text-[72px] text-white">
            Every Voice Matters. <br /> Every Story Counts.
          </h1>
          <p className="text-white mt-[25px] md:mt-4 mb-[25px] mr-auto max-w-[700px] md:mb-10 w-[100%] font-normal text-base md:text-lg">
            Impartial, professional mediation that helps you resolve disputes and rebuild trust, at your pace, on your terms.
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
