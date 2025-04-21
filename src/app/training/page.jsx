import CTA from '@/components/shared/CTA';
import Header from '@/components/shared/Header';
import Apply from '@/components/trainning/Apply';
import ExploreItem from '@/components/trainning/ExploreItem';
import FaqTrainning from '@/components/trainning/FaqTrainning';
import Introduction from '@/components/trainning/Introduction';
import WhyTrain from '@/components/trainning/WhyTrain';
import React from 'react';
import { HeaderTraining } from '@/components/trainning/HeaderTraining';

const Training = () => {
  return (
    <div className="bg-[#F9F8FF]">
      <HeaderTraining />
      <Introduction />
      {/* Explore */}
      <section className="py-16 px-5 md:px-16 md:py-[80px] ">
        <h1 className="font-medium mb-[40px] lg:mb-[100px]  tracking-[-4%] mx-auto text-center text-4xl md:text-5xl leading-[120%]">
          Explore Our Mediation Training Courses
        </h1>
        <ExploreItem />
      </section>
      <WhyTrain />
      <Apply />
      <FaqTrainning />
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Whether you’re qualifying for the first time or building on existing experience, we’re here to support your growth.'}
        Button1Link={'#'}
        Button1Text={'Enrol in a Mediation Training Programme'}
        Button2Link={'/contact-us'}
        Button2Text={'Contact Us for Upcoming Course Dates'}
      />
    </div>
  );
};

export default Training;
