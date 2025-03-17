import React from 'react';
import Link from 'next/link';

const Header = ({ title, subTitle, Button1Text, Button1Link = '#', Button2Text, Button2Link = '#', cover }) => {
  return (
    <header
      style={{
        backgroundImage: `url('${
          typeof cover === 'string' ? cover : cover?.src
        }'), linear-gradient(to right, rgba(62, 0, 101, 0.80) 15.68%, rgba(62, 0, 101, 0.15) 69.4%)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="pt-[187px] md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full lg:max-w-[80%]">
        <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[84px] text-white">{title}</h1>
        <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">{subTitle}</p>
        <div className="flex md:flex-row flex-col items-center gap-4">
          {Button1Text && (
            <button
              className={`bg-primary border w-full md:w-auto border-primary font-normal text-lg text-[#FCFCFD] px-12 py-3 rounded-[40px]`}
            >
              <Link className="w-full" href={Button1Link}>
                {Button1Text}
              </Link>
            </button>
          )}
          {Button2Text && (
            <button className=" w-full md:w-auto bg-transparent font-normal border border-white text-lg text-[#FCFCFD] px-[48px] py-3 rounded-[40px] ">
              <Link className="w-full  " href={Button2Link}>
                {Button2Text}
              </Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
