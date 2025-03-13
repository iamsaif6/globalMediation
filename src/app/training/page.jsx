import Header from '@/components/shared/Header';
import ExploreItem from '@/components/trainning/ExploreItem';
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
    </div>
  );
};

export default Training;
