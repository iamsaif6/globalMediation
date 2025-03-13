import Header from '@/components/shared/Header';
import React from 'react';
import serviceHeader from '/public/service_header.png';
import Introduction from '@/components/service/Introduction';
import Tabs from '@/components/service/Tabs';
import WhyChoose from '@/components/service/WhyChoose';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import Map from '@/components/service/Map';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';

const Service = () => {
  return (
    <div>
      <Header
        title={'Workplace and Employment Mediation'}
        subTitle={
          'Specialised mediation services designed to resolve workplace conflicts and foster collaboration, trust, and a positive work environment.'
        }
        Button1Text={'Book a mediation session'}
        Button1Link="#"
        Button2Text={'Learn About Mediation Training'}
        Button2Link="#"
        cover={serviceHeader}
      />
      <Introduction />
      <Tabs />
      <WhyChoose />
      <MediationCalculation />
      <FeedbackCarousel
        title={'What Our Clients Say About Workplace and Employment Mediation?'}
        subTitle={'Real testimonials from clients who benefited from this service.'}
      />
      <Map />
      <FAQ />
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Learn More About Global Mediation'}
          subTitle={'For more information about our services, team, training programs, or career opportunities, get in touch with us:'}
          Button1Link={'#'}
          Button1Text={'Contact us today'}
        />
      </div>
    </div>
  );
};

export default Service;
