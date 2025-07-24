import React from 'react';

const SectionHeading = ({ title, subTitle, center = false, light = false, fullWidth, className }) => {
  function normalizeTitleCase(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  const sectionTitle = normalizeTitleCase(title);
  const sectionSubtitle = normalizeTitleCase(subTitle);

  return (
    <div className={`  ${light ? 'text-white' : ''} ${center ? 'text-center' : 'text-left'} max-w-[1200px] mx-auto   md:text-center `}>
      <h2
        className={`font-medium ${
          fullWidth ? 'w-full' : 'w-[80%] md:w-full'
        }   mx-auto leading-[120%] tracking-[-4%] text-4xl text-center  md:text-5xl mb-5 md:mb-6 ${className}`}
      >
        {sectionTitle}
      </h2>
      <p className={`${light ? 'text-white' : ' '}  text-base md:text-lg font-normal leading-[150%] md:text-center text-left`}>
        {sectionSubtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
