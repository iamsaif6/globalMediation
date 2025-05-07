import CTA from '@/components/shared/CTA';
import Apply from '@/components/trainning/Apply';
import ExploreItem from '@/components/trainning/ExploreItem';
import FaqTrainning from '@/components/trainning/FaqTrainning';
import Introduction from '@/components/trainning/Introduction';
import WhyTrain from '@/components/trainning/WhyTrain';
import React from 'react';
import { HeaderTraining } from '@/components/trainning/HeaderTraining';
import Head from 'next/head';

export const metadata = {
  title: 'Mediation Training Course - Global Mediation',
  description:
    'An advanced course for qualified mediators, wishing to carry out mediations in the field of special educational needs and disability, […]',
};

const Training = () => {
  return (
    <div className="bg-[#F9F8FF]">
      <Head>
        <title>Mediation Training Course - Global Mediation</title>
        <meta
          name="description"
          content="An advanced course for qualified mediators, wishing to carry out mediations in the field of special educational needs and disability, […]"
        />

        <meta itemprop="name" content="Mediation Training Course - Global Mediation" />
        <meta
          itemprop="description"
          content="An advanced course for qualified mediators, wishing to carry out mediations in the field of special educational needs and disability, […]"
        />
        <meta
          itemprop="image"
          content="https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/05/08143917/glob3-e1556717387794.jpg"
        />

        <meta property="og:url" content="https://www.globalmediation.co.uk/sendtrainingcourse/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Mediation Training Course - Global Mediation" />
        <meta
          property="og:description"
          content="An advanced course for qualified mediators, wishing to carry out mediations in the field of special educational needs and disability, […]"
        />
        <meta
          property="og:image"
          content="https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/05/08143917/glob3-e1556717387794.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" Mediation Training Course - Global Mediation" />
        <meta
          name="twitter:description"
          content="An advanced course for qualified mediators, wishing to carry out mediations in the field of special educational needs and disability, […]"
        />
        <meta
          name="twitter:image"
          content="https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/05/08143917/glob3-e1556717387794.jpg"
        />
      </Head>
      <HeaderTraining />
      <Introduction />
      {/* Explore */}
      <section aria-label=" Explore Our Mediation Training Courses" className="py-16 px-5 md:px-16 md:py-[80px] ">
        <h3 className="font-medium mb-[40px] lg:mb-[100px]  tracking-[-4%] mx-auto text-center text-4xl md:text-5xl leading-[120%]">
          Explore Our Mediation Training Courses
        </h3>
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
