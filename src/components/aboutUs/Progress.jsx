import React from 'react';
import service1 from '/public/Placeholder Image 3.png';
import Image from 'next/image';

const Progress = () => {
  return (
    <div className="bg-[#F9F8FF] relative py-16 px-5 md:px-16 md:py-[80px] grid grid-cols-2 gap-[80px]">
      <div className="col-span-2 flex justify-center relative z-20 flex-col gap-9 lg:col-span-1">
        <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Progress Through Understanding</h1>
        <p className="text-[#667085] text-base md:text-lg leading-[150%] my-6">
          When communication breaks down, misunderstandings and conflict can quickly follow. But through listening, reframing and altering
          perspectives, we help people break through those barriers and find their way back to a place of clarity, understanding and
          belonging.
        </p>
        <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
          {/* <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
        </div>
      </div>
      <div className="relative max-h-[570px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
        {/* <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
        <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
      </div>
      {/* Blob */}
      <svg
        className=" absolute top-0 left-[0%]"
        xmlns="http://www.w3.org/2000/svg"
        width="280"
        height="288"
        viewBox="0 0 280 288"
        fill="none"
      >
        <path
          d="M210.704 19.6995C189.826 7.39956 166.712 1.03256 141.984 0.756845V0.644531H0.0418054V140.79C0.0418054 142.173 0.000957796 143.399 0.000957796 144.537C-0.0687821 163.801 3.6706 182.888 11.004 200.701C18.3003 218.352 28.3639 233.736 40.8477 246.419C53.3314 259.102 68.46 269.268 85.6922 276.666C102.926 284.065 121.488 287.867 140.243 287.838C165.619 287.838 189.31 281.501 210.663 269.018C232.015 256.534 249.115 239.082 261.43 217.163C273.745 195.243 280 170.837 280 144.583C280 118.329 273.766 93.8159 261.445 71.8608C249.125 49.9056 232.056 32.2854 210.704 19.6995Z"
          fill="#f3f1fe"
        />
      </svg>
    </div>
  );
};

export default Progress;
