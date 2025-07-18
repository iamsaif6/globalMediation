import React from 'react';
import Link from 'next/link';
import overlay from '/public/Overlay.png';
import Image from 'next/image';
// , linear-gradient(to right, rgba(62,0,101,0.80) 15.68%, rgba(62,0,101,0.15) 69.4%)
const Header = ({ title, subTitle, Button1Text, Button1Link = '#', Button2Text, Button2Link = '#', cover, isHomePage = false }) => {
  function normalizeTitleCase(text) {
    if (!text) return '';

    // Find text before the first parenthesis
    const match = text.match(/^([^(]*)/);
    const prefix = match ? match[1] : '';
    const suffix = text.slice(prefix.length); // Keep content inside and after parentheses untouched

    const normalizedPrefix = prefix.charAt(0).toUpperCase() + prefix.slice(1).toLowerCase();

    return normalizedPrefix + suffix;
  }

  // Usage
  const headerTitle = normalizeTitleCase(title);
  const headerSubtitle = normalizeTitleCase(subTitle);
  const headerButton1Text = normalizeTitleCase(Button1Text);
  const headerButton2Text = normalizeTitleCase(Button2Text);

  return (
    <header
      style={{
        backgroundImage: `url('${typeof cover === 'string' ? cover : cover?.src}')`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
      className=" pt-[187px] relative max-h-[1050px] h-screen md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <Image alt="Overlay" src={overlay} className=" absolute top-0 left-0 w-full h-full object-cover" />
      {isHomePage && (
        <div>
          <video playsInline autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="/HomepageHeader.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(62,0,101,0.80)] via-[rgba(62,0,101,0.4)] to-[rgba(62,0,101,0.15)] z-10"></div>
        </div>
      )}
      <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
        <h1 className="font-semibold tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw] text-white">
          {headerTitle}
        </h1>
        <p className="text-white mt-[25px] md:mt-4 mb-[25px] mr-auto max-w-[700px] md:mb-10 w-[100%] font-normal text-base md:text-lg xl:text-xl">
          {headerSubtitle}
        </p>
        <div className=" flex md:flex-row flex-col items-center gap-4">
          {headerButton1Text && (
            <button
              className={`bg-primary px-5 lg:max-w-max  border block border-primary font-semibold text-base lg:text-lg text-[#FCFCFD] lg:px-12 py-3 rounded-[40px]`}
            >
              <Link className="w-full" href={Button1Link}>
                {headerButton1Text}
              </Link>
            </button>
          )}
          {headerButton2Text && (
            <button className=" mb-[18px] md:mb-0  px-5 lg:max-w-max  border block border-white font-semibold text-base lg:text-lg text-[#FCFCFD] lg:px-12 py-3 rounded-[40px] ">
              <Link className="w-full  " href={Button2Link}>
                {headerButton2Text}
              </Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
