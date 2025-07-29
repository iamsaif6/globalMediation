import React from 'react';
import choose from '/public/Dars 2.png';
import Link from 'next/link';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <section className="my-0  mx-0 md:mx-16 md:my-[80px]">
      <div className="bg-primary text-white md:rounded-3xl px-5 md:px-[49px] py-[50px] md:py-[46px] grid grid-cols-2 gap-[30px]">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-4xl md:text-5xl font-medium leading-[120%] mb-8">Why choose DARS?</h2>
          <p className="pb-8 text-base md:text-lg border-b-[0.5px] border-white">
            DARS offers a calm, independent space for people to resolve disputes when other options haven’t worked.
            <br className="mb-3" />
            With a strong focus on clarity, confidentiality, and fairness, it’s a trusted alternative to litigation or prolonged conflict.
            <br className="mb-3" />
            We’re here to help you move forward — with transparency, professionalism, and care.
          </p>

          <div className="my-10 md:my-[21px]">
            <h3 className=" text-2xl mb-5">Contact DARS</h3>
            <p className="mb-8 text-lg">For more information or to begin the process:</p>
            <ul className="space-y-3">
              <li>
                <a className="flex text-lg text-white leading-[140%] items-center gap-4" href="tel:(028) 9072 6060">
                  <span className="h-8 w-8 border border-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M5.7184 1.81652L5.1596 1.98486C4.66205 2.13491 4.21771 2.42396 3.87889 2.81801C3.54007 3.21206 3.32087 3.6947 3.24708 4.20912C3.01561 5.82081 3.5331 7.70528 4.78084 9.86642C6.02546 12.0221 7.39556 13.4109 8.90359 14.0188C9.38814 14.2141 9.91857 14.2661 10.4318 14.1687C10.9451 14.0713 11.4196 13.8286 11.7989 13.4693L12.2213 13.0688C12.4956 12.8092 12.6663 12.4588 12.7017 12.0828C12.7371 11.7068 12.6348 11.3308 12.4138 11.0245L11.357 9.55935C11.2141 9.36155 11.0129 9.21341 10.7816 9.1357C10.5503 9.058 10.3005 9.05461 10.0672 9.12603L8.46872 9.61468L8.42741 9.62248C8.25128 9.6482 7.84446 9.2671 7.33788 8.38955C6.80793 7.47148 6.69882 6.9345 6.84455 6.79578L7.65742 6.03747C7.95437 5.76019 8.15721 5.39701 8.23756 4.99874C8.31792 4.60048 8.27176 4.18706 8.10554 3.81633L7.58961 2.66991C7.43447 2.32492 7.15918 2.04812 6.81504 1.89111C6.4709 1.7341 6.08063 1.70759 5.7184 1.81652ZM6.8804 2.98944L7.39477 4.13586C7.4946 4.35822 7.52242 4.60623 7.47435 4.84518C7.42628 5.08413 7.30472 5.30208 7.12668 5.46855L6.31148 6.22763C5.78932 6.72174 5.96233 7.565 6.66375 8.77922C7.32307 9.92175 7.92473 10.486 8.57159 10.3878L8.66823 10.3675L10.2955 9.87109C10.3733 9.8472 10.4566 9.84825 10.5338 9.87411C10.6109 9.89997 10.678 9.94933 10.7257 10.0153L11.7825 11.4804C11.8932 11.6336 11.9445 11.8216 11.9268 12.0097C11.9092 12.1978 11.8238 12.3731 11.6867 12.503L11.2635 12.9035C10.9925 13.16 10.6537 13.3332 10.2871 13.4027C9.92062 13.4722 9.54185 13.435 9.19585 13.2955C7.87252 12.7625 6.62166 11.4945 5.45653 9.47674C4.28829 7.45433 3.81523 5.73431 4.01864 4.31979C4.07129 3.95227 4.22785 3.60745 4.46989 3.32592C4.71193 3.04439 5.02937 2.83788 5.38483 2.7307L5.94363 2.56236C6.12479 2.50792 6.31958 2.52123 6.49165 2.59981C6.66372 2.67839 6.80134 2.81688 6.87885 2.98944"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span>(028) 9072 6060</span>
                </a>
              </li>
              <li>
                <a className="flex text-lg text-white leading-[140%] items-center gap-4" href="mailto:DARS@globalmediation.co.uk">
                  <span className="h-8 w-8 border border-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                      <path
                        d="M3.75102 4.13037H12.7945C13.348 4.13037 13.8788 4.35025 14.2702 4.74163C14.6616 5.13301 14.8815 5.66383 14.8815 6.21733V12.4782C14.8815 13.0317 14.6616 13.5625 14.2702 13.9539C13.8788 14.3453 13.348 14.5652 12.7945 14.5652H3.75102C3.19752 14.5652 2.6667 14.3453 2.27532 13.9539C1.88394 13.5625 1.66406 13.0317 1.66406 12.4782V6.21733C1.66406 5.66383 1.88394 5.13301 2.27532 4.74163C2.6667 4.35025 3.19752 4.13037 3.75102 4.13037ZM3.75102 4.82602C3.40319 4.82602 3.09711 4.94428 2.86058 5.15298L8.27276 8.65211L13.6849 5.15298C13.4484 4.94428 13.1423 4.82602 12.7945 4.82602H3.75102ZM8.27276 9.49385L2.45015 5.71646C2.3945 5.8695 2.35971 6.04341 2.35971 6.21733V12.4782C2.35971 12.8472 2.5063 13.2011 2.76722 13.462C3.02814 13.7229 3.38202 13.8695 3.75102 13.8695H12.7945C13.1635 13.8695 13.5174 13.7229 13.7783 13.462C14.0392 13.2011 14.1858 12.8472 14.1858 12.4782V6.21733C14.1858 6.04341 14.151 5.8695 14.0954 5.71646L8.27276 9.49385Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span>DARS@globalmediation.co.uk</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <button className={`bg-white  font-normal text-lg text-black px-12 py-2 rounded-[40px]`}>
              <Link className="w-full" href={'/contact'}>
                Contact us
              </Link>
            </button>
          </div>
        </div>
        <div className="mt-5 md:mt-0 rounded-[13px] md:rounded-3xl col-span-2 lg:col-span-1 overflow-hidden">
          <Image className="w-full h-full object-cover" alt="Why choose cover" src={choose} />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
