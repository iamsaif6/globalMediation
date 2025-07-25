import React from 'react';

const MediationCard = ({ title, subTitle, icon, active = false }) => {
  return (
    <div
      className={`
        px-[25px] 
        col-span-4 md:col-span-2 lg:col-span-1 
        group cursor-pointer 
        pb-[20px] pt-[20px] md:pt-16 
        border rounded-3xl
        transition-all duration-300 ease-in-out
        ${active ? 'border-primary bg-primary text-white  ' : 'border-gray-300 bg-white text-gray-700 '}
      `}
    >
      <div className="text-secondary flex items-center gap-4">
        {icon({
          fill: ` ${active ? '#fff' : '#43006A'}`,
          className: 'h-[60px]  w-[60px] ',
        })}

        <h2
          className={`
          font-semibold text-2xl my-8
          ${active ? 'text-white' : 'text-gray-700'}
        `}
        >
          {title}
        </h2>
      </div>

      <p
        className={`
          font-arial text-base md:text-lg font-normal
          ${active ? 'text-white/80' : 'text-black'}
        `}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default MediationCard;
