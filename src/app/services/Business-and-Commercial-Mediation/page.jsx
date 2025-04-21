import Header from '@/components/shared/Header';
import React from 'react';
import service1 from '/public/business-1.jpg';
import Button from '@/components/shared/Button';
import Image from 'next/image';

const item = {
  title: 'Business and Commercial Mediation',
  subtitle:
    'Disputes in business can damage relationships, stall progress and increase costs. Our mediation service supports companies and professionals to resolve commercial disagreements quickly and confidentially, protecting reputations and preserving working relationships wherever possible.',
  service: [
    'Contract Dispute',
    'Shareholder and Partnership Conflicts',
    'Supplier and Client Disputes',
    'Intellectual Property Disputes',
    'Professional Negligence Mediation',
    'Construction Disputes',
    'Tax and Accounting Disputes',
  ],
  image: service1,
};

const page = () => {
  return (
    <div>
      <Header
        Button1Text={'Book a mediation session'}
        Button1Link="/contact-us"
        Button2Text={'Book a Mediation Session'}
        Button2Link="/contact-us"
        title={'Business and Commercial Mediation'}
      />
      <div className={` py-16 md:py-[80px] px-5 md:px-[60px]`}>
        <div className="text-center">
          <h1 className="w-full  mb-10 font-medium text-4xl md:text-5xl leading-[120%] ">{item.title}</h1>
          <p className="mb-[32px] md:mb-[60px] text-black text-base md:text-lg leading-[150%] my-6">{item.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
          <div className={` col-span-2 lg:col-span-1`}>
            {item.service.map(li => (
              <div
                key={li}
                className={` border-b-[0.5px] text-[#667085] group flex gap-3 items-center justify-between border-[#DAD3FF]  text-lg font-normal p-3 md:p-6`}
              >
                <div className="flex  items-center gap-[26px]">
                  <span className="w-[10px] flex-shrink-0 h-[10px] bg-primary rounded-full inline-block"></span>
                  <p>{li}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-2 order-1 lg:col-span-1 overflow-hidden   max-h-[303px] lg:max-h-[403px] rounded-[40px] relative">
            <div className={`absolute inset-0  z-10`}></div>
            {item?.image && <Image className="object-cover w-full h-full relative z-0" alt={item.title} src={item?.image} />}
          </div>
        </div>
        <div>
          <div className="mt-10">
            <Button padding="xlarge" href="#" title={'Learn more'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
