import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import image1 from '/public/award (1) 1.png';
import image2 from '/public/award (1) 2.png';
import image3 from '/public/award (1) 3.png';
import image4 from '/public/award (1) 4.png';
import image5 from '/public/award (1) 5.png';
import Image from 'next/image';

const Accredited = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px] ">
      <SectionHeading
        title={'Recognised and Trusted Across the UK'}
        subTitle={
          'We are proud to be accredited by the Civil Mediation Council, and trusted by leading organisations across the UK, from public sector bodies to national charities and corporate clients.'
        }
      />
      <div className="grid gap-[30px] mt-8 mb-16  md:my-[80px] grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-[20px] md:text-[32px] font-medium mb-6 md:mb-8">Partners Include:</h2>
          <ul className="space-y-3 md:space-y-6">
            <li>
              <Link
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>Local authorities across the UK</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>Educational institutions</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>Businesses and community organisations</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-[20px] md:text-[32px] font-medium mb-6 md:mb-8">Accreditation</h2>
          <ul className="space-y-3 md:space-y-6">
            <li>
              <Link
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>Civil Mediation Council</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>College of Mediators</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Partner */}
      <div className="flex items-center justify-between flex-wrap gap-3 md:gap-8">
        <Image alt="Partner" src={image1} />
        <Image alt="Partner" src={image2} />
        <Image alt="Partner" src={image3} />
        <Image alt="Partner" src={image4} />
        <Image alt="Partner" src={image5} />
        <Image alt="Partner" src={image1} />
        <Image alt="Partner" src={image2} />
      </div>
    </section>
  );
};

export default Accredited;
