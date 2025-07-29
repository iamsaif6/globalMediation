import Image from 'next/image';
import React from 'react';
import cover from '/public/case.png';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import CTA from '@/components/shared/CTA';

const CaseStudies = () => {
  return (
    <section className="pb-16 pt-[200px] px-5 md:pb-[80px] md:px-[64px] bg-secondary text-white">
      <div className="flex gap-8 flex-col md:flex-row items-start md:items-end justify-between">
        <div className="text-left">
          <h3 className="font-medium mb-[20px] md:mb-6 text-4xl md:text-5xl leading-[120%]">Case Study</h3>
        </div>
      </div>

      <div className="slider-container slick-bar case py-[22px]">
        <div className=" rounded-xl overflow-hidden !grid grid-cols-12">
          <div className="col-span-12 h-[290px] md:h-full min-h-[290px] lg:min-h-[500px] lg:col-span-5">
            <Image className="object-cover w-full h-full" alt="Cover" src={cover} />
          </div>
          <div className="col-span-12  bg-white lg:col-span-7 py-[42px] md:py-[66px] px-6 md:pr-[74px] md:pl-[90px]">
            <h3 className="mb-8 text-[#1C1C1C] font-normal text-4xl md:text-5xl leading-[120%]">Case study 1</h3>
            <p className="text-[#667085] mb-12 font-normal text-sm md:text-lg leading-[150%]">
              Unlock the skills needed to mediate disputes effectively with Global Mediation’s comprehensive training programs. Whether
              you’re new to mediation or looking to specialise in areas like SEND mediation, our accredited courses offer practical learning
              opportunities delivered by experienced trainers. Unlock the skills needed to mediate disputes effectively with Global
              Mediation’s comprehensive training programs. Whether you’re new to mediation or looking to specialise in areas.
            </p>
            <Link href={'#'} className="flex w-max pb-1 border-b border-secondary  gap-1 items-center text-secondary font-semibold text-sm">
              <span>Read more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.646 6.64604C12.6924 6.59948 12.7476 6.56253 12.8084 6.53733C12.8691 6.51212 12.9342 6.49915 13 6.49915C13.0658 6.49915 13.1309 6.51212 13.1916 6.53733C13.2524 6.56253 13.3076 6.59948 13.354 6.64604L18.354 11.646C18.4006 11.6925 18.4375 11.7477 18.4627 11.8084C18.4879 11.8692 18.5009 11.9343 18.5009 12C18.5009 12.0658 18.4879 12.1309 18.4627 12.1917C18.4375 12.2524 18.4006 12.3076 18.354 12.354L13.354 17.354C13.2601 17.4479 13.1328 17.5007 13 17.5007C12.8672 17.5007 12.7399 17.4479 12.646 17.354C12.5521 17.2602 12.4994 17.1328 12.4994 17C12.4994 16.8673 12.5521 16.7399 12.646 16.646L16.793 12.5H6C5.86739 12.5 5.74021 12.4474 5.64645 12.3536C5.55268 12.2598 5.5 12.1326 5.5 12C5.5 11.8674 5.55268 11.7403 5.64645 11.6465C5.74021 11.5527 5.86739 11.5 6 11.5H16.793L12.646 7.35404C12.5994 7.30759 12.5625 7.25242 12.5373 7.19167C12.5121 7.13093 12.4991 7.06581 12.4991 7.00004C12.4991 6.93427 12.5121 6.86915 12.5373 6.80841C12.5625 6.74766 12.5994 6.69248 12.646 6.64604Z"
                  fill="#43006A"
                />
              </svg>{' '}
            </Link>
          </div>
        </div>
      </div>

      <div className="slider-container slick-bar case py-[22px]">
        <div className=" rounded-xl overflow-hidden !grid grid-cols-12">
          <div className="col-span-12 h-[290px] md:h-full min-h-[290px] lg:min-h-[500px] lg:col-span-5">
            <Image className="object-cover w-full h-full" alt="Cover" src={cover} />
          </div>
          <div className="col-span-12  bg-white lg:col-span-7 py-[42px] md:py-[66px] px-6 md:pr-[74px] md:pl-[90px]">
            <h3 className="mb-8 text-[#1C1C1C] font-normal text-4xl md:text-5xl leading-[120%]">Case study 2</h3>
            <p className="text-[#667085] mb-12 font-normal text-sm md:text-lg leading-[150%]">
              Unlock the skills needed to mediate disputes effectively with Global Mediation’s comprehensive training programs. Whether
              you’re new to mediation or looking to specialise in areas like SEND mediation, our accredited courses offer practical learning
              opportunities delivered by experienced trainers. Unlock the skills needed to mediate disputes effectively with Global
              Mediation’s comprehensive training programs. Whether you’re new to mediation or looking to specialise in areas.
            </p>
            <Link href={'#'} className="flex w-max pb-1 border-b border-secondary  gap-1 items-center text-secondary font-semibold text-sm">
              <span>Read more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.646 6.64604C12.6924 6.59948 12.7476 6.56253 12.8084 6.53733C12.8691 6.51212 12.9342 6.49915 13 6.49915C13.0658 6.49915 13.1309 6.51212 13.1916 6.53733C13.2524 6.56253 13.3076 6.59948 13.354 6.64604L18.354 11.646C18.4006 11.6925 18.4375 11.7477 18.4627 11.8084C18.4879 11.8692 18.5009 11.9343 18.5009 12C18.5009 12.0658 18.4879 12.1309 18.4627 12.1917C18.4375 12.2524 18.4006 12.3076 18.354 12.354L13.354 17.354C13.2601 17.4479 13.1328 17.5007 13 17.5007C12.8672 17.5007 12.7399 17.4479 12.646 17.354C12.5521 17.2602 12.4994 17.1328 12.4994 17C12.4994 16.8673 12.5521 16.7399 12.646 16.646L16.793 12.5H6C5.86739 12.5 5.74021 12.4474 5.64645 12.3536C5.55268 12.2598 5.5 12.1326 5.5 12C5.5 11.8674 5.55268 11.7403 5.64645 11.6465C5.74021 11.5527 5.86739 11.5 6 11.5H16.793L12.646 7.35404C12.5994 7.30759 12.5625 7.25242 12.5373 7.19167C12.5121 7.13093 12.4991 7.06581 12.4991 7.00004C12.4991 6.93427 12.5121 6.86915 12.5373 6.80841C12.5625 6.74766 12.5994 6.69248 12.646 6.64604Z"
                  fill="#43006A"
                />
              </svg>{' '}
            </Link>
          </div>
        </div>
      </div>

      <div className="slider-container slick-bar case py-[22px]">
        <div className=" rounded-xl overflow-hidden !grid grid-cols-12">
          <div className="col-span-12 h-[290px] md:h-full min-h-[290px] lg:min-h-[500px] lg:col-span-5">
            <Image className="object-cover w-full h-full" alt="Cover" src={cover} />
          </div>
          <div className="col-span-12  bg-white lg:col-span-7 py-[42px] md:py-[66px] px-6 md:pr-[74px] md:pl-[90px]">
            <h3 className="mb-8 text-[#1C1C1C] font-normal text-4xl md:text-5xl leading-[120%]">Case study 3</h3>
            <p className="text-[#667085] mb-12 font-normal text-sm md:text-lg leading-[150%]">
              Unlock the skills needed to mediate disputes effectively with Global Mediation’s comprehensive training programs. Whether
              you’re new to mediation or looking to specialise in areas like SEND mediation, our accredited courses offer practical learning
              opportunities delivered by experienced trainers. Unlock the skills needed to mediate disputes effectively with Global
              Mediation’s comprehensive training programs. Whether you’re new to mediation or looking to specialise in areas.
            </p>
            <Link href={'#'} className="flex w-max pb-1 border-b border-secondary  gap-1 items-center text-secondary font-semibold text-sm">
              <span>Read more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.646 6.64604C12.6924 6.59948 12.7476 6.56253 12.8084 6.53733C12.8691 6.51212 12.9342 6.49915 13 6.49915C13.0658 6.49915 13.1309 6.51212 13.1916 6.53733C13.2524 6.56253 13.3076 6.59948 13.354 6.64604L18.354 11.646C18.4006 11.6925 18.4375 11.7477 18.4627 11.8084C18.4879 11.8692 18.5009 11.9343 18.5009 12C18.5009 12.0658 18.4879 12.1309 18.4627 12.1917C18.4375 12.2524 18.4006 12.3076 18.354 12.354L13.354 17.354C13.2601 17.4479 13.1328 17.5007 13 17.5007C12.8672 17.5007 12.7399 17.4479 12.646 17.354C12.5521 17.2602 12.4994 17.1328 12.4994 17C12.4994 16.8673 12.5521 16.7399 12.646 16.646L16.793 12.5H6C5.86739 12.5 5.74021 12.4474 5.64645 12.3536C5.55268 12.2598 5.5 12.1326 5.5 12C5.5 11.8674 5.55268 11.7403 5.64645 11.6465C5.74021 11.5527 5.86739 11.5 6 11.5H16.793L12.646 7.35404C12.5994 7.30759 12.5625 7.25242 12.5373 7.19167C12.5121 7.13093 12.4991 7.06581 12.4991 7.00004C12.4991 6.93427 12.5121 6.86915 12.5373 6.80841C12.5625 6.74766 12.5994 6.69248 12.646 6.64604Z"
                  fill="#43006A"
                />
              </svg>{' '}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-10 mb-10 justify-center md:mt-[50px]">
        <Button title={'Read more case studies'} href="/blog" />
      </div>

      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'/contact'}
        Button1Text={'Enrol in a mediation training program today'}
        Button2Link={'/contact'}
        Button2Text={'Contact us for upcoming course dates'}
      />
    </section>
  );
};

export default CaseStudies;
