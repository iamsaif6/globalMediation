import React from 'react';
import Button from './Button';

const Header = ({ title, subTitle }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, #3E0065CC, #3e006509)`,
        backgroundBlendMode: 'overlay',
      }}
      className="pt-[187px] md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="max-w-[800px]">
        <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:text-[84px] text-white">{title}</h1>
        <p className="text-white my-[18px] md:my-10 w-[70%] font-normal text-sm md:text-lg">{subTitle}</p>
        <Button title={'Learn About Our Services'} href="#" />
      </div>
    </div>
  );
};

export default Header;
