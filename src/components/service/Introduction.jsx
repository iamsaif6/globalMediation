import Image from 'next/image';
import React from 'react';

const Introduction = ({ title, subtitle, image, items }) => {
  return (
    <section>
      <div className=" py-16 px-5 md:px-16 md:py-[80px] ">
        <div className="text-left md:text-center mb-[60px] lg:mb-[100px]">
          <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Overview of {title}</h1>
          <p className="text-black text-base md:text-lg leading-[150%] my-6">{subtitle}</p>
        </div>
        <div className="items-center grid grid-cols-2 gap-[80px]">
          <div className="relative   lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
            <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={image} />
          </div>
          <div className="col-span-2 flex justify-center flex-col lg:col-span-1">
            <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
              <Image
                className="object-cover object-bottom  w-full h-full relative z-0"
                alt={'Experienced Leader In Mediation'}
                src={image}
              />
            </div>
            {items && (
              <div>
                <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
                <ul className="text-[#667085] text-lg">
                  {items.map(item => {
                    return (
                      <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                        <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
