import React from 'react';

const MediationCard = ({ title, subTitle, icon }) => {
  return (
    <div className="px-[25px] col-span-4 md:col-span-2 lg:col-span-1 hover:border-primary group cursor-pointer duration-300 hover:bg-primary pb-12 pt-[40px] md:pt-16 border border-[#43006A] rounded-3xl">
      <div className="text-secondary group-hover:text-white">{icon}</div>
      <h3 className="text-[#393D4E] group-hover:text-white font-semibold text-2xl my-16">{title}</h3>
      <p className="text-[#9C9C9C] group-hover:text-white font-arial text-base md:text-lg font-normal">{subTitle}</p>
    </div>
  );
};

export default MediationCard;
