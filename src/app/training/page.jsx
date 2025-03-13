import CTA from '@/components/shared/CTA';
import Header from '@/components/shared/Header';
import Apply from '@/components/trainning/Apply';
import ExploreItem from '@/components/trainning/ExploreItem';
import FaqTrainning from '@/components/trainning/FaqTrainning';
import Introduction from '@/components/trainning/Introduction';
import WhyTrain from '@/components/trainning/WhyTrain';
import React from 'react';

const Training = () => {
  return (
    <div className="bg-[#F9F8FF]">
      <Header
        title={'Mediation Training: Learn, Qualify, and Specialise'}
        subTitle={
          'Explore accredited mediation courses designed for aspiring mediators and professionals seeking to enhance their conflict resolution skills.'
        }
        Button1Text={'Enroll in a Mediation Training Program Today'}
        Button1Link="#"
        Button2Text={'Contact Us for Upcoming Course Dates'}
        Button2Link="#"
      />
      <Introduction />
      {/* Explore */}
      <section className="py-16 px-5 md:px-16 md:py-[80px] ">
        <h1 className="font-medium max-w-[880px] mx-auto text-center text-4xl md:text-5xl leading-[120%]">
          Explore Our Mediation Training Courses
        </h1>
        <ExploreItem />
      </section>
      <WhyTrain />
      <Apply />
      <FaqTrainning />
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'#'}
        Button1Text={'Enrol in a Mediation Training Program Today'}
        Button2Link={'#'}
        Button2Text={'Contact Us for Upcoming Course Dates'}
      />
    </div>
  );
};

export default Training;
