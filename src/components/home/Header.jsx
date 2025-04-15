import React from 'react';
import Link from 'next/link';
import headerIMG from '/public/home_header.jpeg';

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.80) 15.68%, rgba(62, 0, 101, 0.15) 69.4%), url('/home_header.jpeg')`,
        backgroundRepeat: 'no-repeat',
      }}
      className="pt-[187px] bg-cover bg-top relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full text-left relative z-10 lg:max-w-[700px] mr-auto">
        <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[72px] text-white">
          Helping People Move Forward
        </h1>
        <p className="text-white mt-[18px] md:mt-6 mb-[26px] mr-auto md:mb-8 w-[70%] font-normal text-sm md:text-lg">
          Impartial, professional mediation that helps you resolve disputes and rebuild trust, at your pace, on your terms.
        </p>
        <div className="flex md:flex-row flex-col  items-center gap-4">
          <button
            className={`bg-primary border w-full md:w-auto border-primary font-normal text-lg text-[#FCFCFD] px-12 py-3 rounded-[40px]`}
          >
            <Link className="w-full" href="/services">
              Explore Our Services
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
