import Header from '@/components/shared/Header';
import React from 'react';
import KeyFeature from '../../components/dars/KeyFeature';
import OverView from '../../components/dars/OverView';
import HowDarsWork from '../../components/dars/HowDarsWork';
import Benifit from '@/components/dars/Benifit';
import WhyChoose from '@/components/dars/WhyChoose';
import cover from '/public/dars-cover.jpg';
import ServiceAvailability from '@/components/dars/ServiceAvailability';
import ContactDars from '@/components/dars/ContactDars';

const Dars = () => {
  return (
    <div>
      <Header
        cover={cover}
        title={'Dispute Avoidance and Resolution Service (DARS)'}
        subTitle={'A calm, fair and impartial way to resolve disputes when mediation has not been successful or is not suitable.'}
      />
      {/* OverView */}
      <OverView />
      <WhyChoose />
      {/* How DARS work */}
      <HowDarsWork />
      {/* Benifit */}
      <Benifit />
      {/* Key Feature */}
      <KeyFeature />
      <ServiceAvailability />
      <ContactDars />
    </div>
  );
};

export default Dars;
