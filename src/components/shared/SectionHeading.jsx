import React from 'react';

const SectionHeading = ({ title, subTitle, center = false }) => {
  return (
    <div className={`max-w-[800px] mx-auto ${center ? 'text-center' : 'text-left'}  md:text-center`}>
      <h1 className="font-medium leading-[120%] tracking-[-4%] text-4xl md:text-5xl mb-5 md:mb-6">{title}</h1>
      <p className="text-[#9C9C9C] text-base md:text-lg font-normal">{subTitle}</p>
    </div>
  );
};

export default SectionHeading;
