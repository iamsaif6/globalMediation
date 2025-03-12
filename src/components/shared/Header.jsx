import React from 'react';
import Button from './Button';
import Link from 'next/link';

const Header = ({ title, subTitle, Button1Text, Button1Link = '#', Button2Text, Button2Link = '#' }) => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to right, #3E0065CC, #3e006509)`,
        backgroundBlendMode: 'overlay',
      }}
      className="pt-[187px] md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="max-w-[800px]">
        <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:text-[84px] text-white">{title}</h1>
        <p className="text-white my-[18px] md:my-10 w-[70%] font-normal text-sm md:text-lg">{subTitle}</p>
        {Button1Text && <Button title={Button1Text} href={Button1Link} />}
        {Button2Text && (
          <button className=" bg-primary font-normal text-lg text-[#FCFCFD] px-[24px] py-3 rounded-[40px] ">
            <Link className="w-full  " href={Button2Link}>
              {Button2Text}
            </Link>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
