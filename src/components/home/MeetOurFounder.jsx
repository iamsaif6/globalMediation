import React from 'react';
import Adam from '/public/members/Adam.jpeg';
import Image from 'next/image';

const MeetOurFounder = () => {
  return (
    <div className="grid grid-cols-1 px-5 lg:grid-cols-2 items-center  gap-[90px] lg:max-w-[1318px] mx-auto">
      <div className="max-h-[500px] max-w-[500px] mx-auto rounded-2xl overflow-hidden">
        <Image src={Adam} className="w-full h-full object-cover object-center" />
      </div>
      <div className="text-white">
        <p className="font-semibold text-2xl mb-5">Adam Gersch</p>
        <p className="text-xl lg::text-2xl">
          Adam is a practising criminal barrister and CEDR-accredited mediator who founded Global Mediation in 1999. He oversees the
          organisation’s strategic direction and brings decades of legal and mediation experience from the UK and US.
        </p>
        <p className="font-semibold text-xl mt-10"> Founder & CEO</p>
      </div>
    </div>
  );
};

export default MeetOurFounder;
