import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '/public/Layer_2.png';
import img2 from '/public/ISO 27001_2013 1.png';
import img3 from '/public/image 15.png';
import img4 from '/public/cyber.png';
import img5 from '/public/ISO 9001.png';
import Image from 'next/image';

const Marque = () => {
  return (
    <div className="py-6">
      <Marquee autoFill>
        <div className=" h-24 mx-[30px] lg:mx-[70px] w-24">
          <Image className="w-full h-full object-contain" src={img1} alt="Living Wadge Company" />
        </div>
        <div className="  h-24  mx-[30px] lg:mx-[70px] w-24">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
        </div>
        <div className="  h-24  mx-[30px] lg:mx-[70px] w-24">
          <Image className="w-full h-full object-contain" src={img3} alt="College of mediator" />
        </div>
        <div className="  h-24  mx-[30px] lg:mx-[70px] w-24">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
        </div>
        <div className="  h-24  mx-[30px] lg:mx-[70px] w-24">
          <Image className="w-full h-full object-contain" src={img4} alt="Cyber" />
        </div>
        <div className="  h-24  mx-[30px] lg:mx-[70px] w-24">
          <Image className="w-full h-full object-contain" src={img5} alt="Cyber" />
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;
