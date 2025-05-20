import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '/public/Layer_2.png';
import img2 from '/public/ISO 27001_2013 1.png';
import img3 from '/public/image 15.png';
import img4 from '/public/cyber.png';
import img5 from '/public/ISO 9001.png';
import img6 from '/public/cmc.png';
import img7 from '/public/confident.png';

import Image from 'next/image';

const Marque = () => {
  return (
    <section aria-label="Certifications and Partners" className="py-16 lg:mb-[0]  md:mb-[100px]">
      <div className="lg:flex hidden items-center flex-wrap justify-center">
        <div className=" h-24 mx-[30px]   w-24">
          <Image className="w-full h-full object-contain" src={img7} alt="Confident" />
        </div>
        <div className=" h-24 mx-[30px]   w-24">
          <Image className="w-full h-full object-contain" src={img1} alt="Living Wadge Company" />
        </div>
        <div className="  h-24  mx-[30px]   w-24">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
        </div>
        <div className="  h-24  mx-[30px]   w-24">
          <Image className="w-full h-full object-contain" src={img3} alt="College of mediator" />
        </div>
        <div className="  h-24  mx-[30px]   w-24">
          <Image className="w-full h-full object-contain" src={img6} alt="CMC" />
        </div>
        <div className="  h-24  mx-[30px]   w-24">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO 27001_2013 1" />
        </div>
        <div className="  h-24  mx-[30px]   w-24">
          <Image className="w-full h-full object-contain" src={img4} alt="Cyber" />
        </div>
        <div className="  h-24  mx-[30px]   w-24">
          <Image className="w-full h-full object-contain" src={img5} alt="ISO 9001" />
        </div>
      </div>
      <div className="block lg:hidden">
        <Marquee>
          <div className=" h-24 mx-[30px]   w-24">
            <Image className="w-full h-full object-contain" src={img7} alt="Confident" />
          </div>
          <div className=" h-24 mx-[30px]   w-24">
            <Image className="w-full h-full object-contain" src={img1} alt="Living Wadge Company" />
          </div>
          <div className="  h-24  mx-[30px]   w-24">
            <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
          </div>
          <div className="  h-24  mx-[30px]   w-24">
            <Image className="w-full h-full object-contain" src={img3} alt="College of mediator" />
          </div>
          <div className="  h-24  mx-[30px]   w-24">
            <Image className="w-full h-full object-contain" src={img6} alt="CMC" />
          </div>
          <div className="  h-24  mx-[30px]   w-24">
            <Image className="w-full h-full object-contain" src={img2} alt="ISO 27001_2013 1" />
          </div>
          <div className="  h-24  mx-[30px]   w-24">
            <Image className="w-full h-full object-contain" src={img4} alt="Cyber" />
          </div>
          <div className="  h-24  mx-[30px]   w-24">
            <Image className="w-full h-full object-contain" src={img5} alt="ISO 9001" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Marque;
