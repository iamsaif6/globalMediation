import React from 'react';

const MediationCard = ({ title, subTitle, icon, active = false }) => {
  return (
    <div
      className={`
        px-[25px] 
        col-span-4 md:col-span-2 lg:col-span-1 
        group cursor-pointer 
        pb-12 pt-[40px] md:pt-16 
        border rounded-3xl
        transition-all duration-300 ease-in-out
        ${active ? 'border-primary bg-primary text-white  ' : 'border-gray-300 bg-white text-gray-700 '}
      `}
    >
      <div className="text-secondary">{icon}</div>
      <h3
        className={`
          font-semibold text-2xl my-16
          ${active ? 'text-white' : 'text-gray-700'}
        `}
      >
        {title}
      </h3>
      <p
        className={`
          font-arial text-base md:text-lg font-normal
          ${active ? 'text-white/80' : 'text-gray-500'}
        `}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default MediationCard;
