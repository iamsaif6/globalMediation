import Link from 'next/link';
import React from 'react';

const items = [
  'Expertise across a wide range of disputes',
  'Accessible services throughout the UK',
  'Personalised support from a dedicated case manager',
  'Accredited mediators with real-world experience',
  '95% success rate in achieving full or partial resolution',
];

const WhyMediation = () => {
  return (
    <section
      aria-label="Why Mediation"
      className="py-16 mt-[40px] lg:mt-[80px] md:py-[80px] mb-16 md:mb-[80px] pr-5 md:pr-16 pl-5 md:pl-[49px] bg-secondary "
    >
      <div className="grid grid-cols-2  gap-[90px] lg:max-w-[1318px] mx-auto">
        <div className="relative  col-span-2 lg:col-span-1">
          <svg
            className=" w-full max-w-[300px] md:max-w-[400px] relative mx-auto h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 594 610"
            fill="none"
          >
            <path
              d="M292.801 609.069H593.853V311.785C593.929 308.851 593.951 306.241 593.951 303.826C594.118 262.989 586.217 222.522 570.7 184.748C555.225 147.322 533.881 114.693 507.371 87.7935C480.861 60.8937 448.828 39.3328 412.269 23.6412C375.668 7.94148 336.243 -0.103562 296.418 0.00100643C242.575 0.00100643 192.349 13.4401 147.061 39.9175C101.773 66.395 65.506 103.409 39.3751 149.921C13.2441 196.432 0 248.153 0 303.826C0 359.499 13.255 411.414 39.3751 458.077C65.4952 504.74 101.719 541.971 147.039 568.665C191.342 594.742 240.366 608.257 292.801 608.863V609.069Z"
              fill="#00A49F"
            />
          </svg>
          <p className="font-semibold leading-[60%] text-[103px] md:text-[153px] text-white absolute top-1/2 left-1/2 -translate-1/2">
            25 <span className="block text-[41px] md:text-[60px]">years</span>
          </p>
        </div>
        <div className="text-white col-span-2 lg:col-span-1">
          <h2 className="leading-[120%] w-full lg:w-[90%] md:w-full font-medium text-[32px] md:text-5xl mb-5 md:mb-5 !text-white">
            Why global mediation
          </h2>
          <p className="font-normal text-base md:text-lg leading-[150%]">
            Every situation is different. That’s why our trained mediators bring empathy, curiosity and real-world experience. With over 25
            years of supporting people through conflict, we’re trusted by leading organisations across sectors, from SMEs to national
            bodies, to deliver consistent and effective mediation, navigate difficult conversations, and support lasting outcomes. Our
            diverse team fosters a sense of belonging, ensuring every voice is heard, valued and respected.
          </p>
          <ul className="mt-6 mb-[42px] md:my-6 text-lg font-normal">
            {items.map(item => (
              <li
                key={item}
                className="py-4 md:py-[10px] flex items-center gap-6 px-6 duration-200 hover:text-[#101828] hover:bg-[#F3F1FF] rounded-xl"
              >
                <span className="h-[10px] flex-shrink-0 rounded-full w-[10px] bg-current inline-block"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex  justify-center">
        <Link
          title="Learn more about us"
          className=" bg-white  font-semibold text-lg text-secondary px-[57px] py-3 rounded-3xl lg:rounded-[40px] "
          href="/about-us"
        >
          Learn more about us
        </Link>
      </div>
    </section>
  );
};

export default WhyMediation;
