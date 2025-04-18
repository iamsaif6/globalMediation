import Header from '@/components/shared/Header';
import React from 'react';
import service1 from '/public/service2.jpg';
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
        <h1 className="w-full md:max-w-[600px] mb-10 font-medium text-4xl md:text-5xl leading-[120%] ">{item.title}</h1>
        <p className="mb-[32px] md:mb-[60px]">{item.subtitle}</p>
        <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
          <div className={` col-span-2 lg:col-span-1`}>
            {item.service.map(li => (
              <div
                key={li}
                className={` border-b-[0.5px] group flex gap-3 items-center justify-between border-[#DAD3FF]  text-lg font-normal p-3 md:p-6`}
              >
                <div className="flex  items-center gap-[26px]">
                  <span className="w-[10px] flex-shrink-0 h-[10px] bg-primary rounded-full inline-block"></span>
                  <p>{li}</p>
                </div>
                <span className="w-8 flex-shrink-0 group-hover:opacity-100 opacity-0 duration-300  h-8 rounded-full bg-secondary  items-center justify-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8.00033 2.66675L7.06033 3.60675L10.7803 7.33342H2.66699V8.66675H10.7803L7.06033 12.3934L8.00033 13.3334L13.3337 8.00008L8.00033 2.66675Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            ))}
            <div className="mt-8">
              <Button padding="xlarge" href="#" title={'Learn more'} />
            </div>
          </div>
          <div className="col-span-2 order-1 lg:col-span-1 overflow-hidden   max-h-[303px] lg:max-h-[403px] rounded-[40px] relative">
            <div className={`absolute inset-0  z-10`}></div>
            {item?.image && <Image className="object-cover w-full h-full relative z-0" alt={item.title} src={item?.image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
