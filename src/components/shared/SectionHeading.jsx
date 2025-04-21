import React from 'react';

const SectionHeading = ({ title, subTitle, center = false, light = false }) => {
  return (
    <div className={`${light ? 'text-white' : ''} max-w-[900px] mx-auto ${center ? 'text-center' : 'text-left'}  md:text-center`}>
      <h1 className="font-medium leading-[120%] tracking-[-4%] text-4xl  md:text-5xl mb-5 md:mb-6">{title}</h1>
      <p className={`${light ? 'text-white' : ' '} text-base md:text-lg font-normal leading-[150%]`}>{subTitle}</p>
    </div>
  );
};

export default SectionHeading;
