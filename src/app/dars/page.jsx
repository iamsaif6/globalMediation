import Header from '@/components/shared/Header';
import React from 'react';
import dars from '/public/dars.png';
import KeyFeature from '../../components/dars/KeyFeature';
import OverView from '../../components/dars/OverView';
import HowDarsWork from '../../components/dars/HowDarsWork';
import Benifit from '@/components/dars/Benifit';
import WhyChoose from '@/components/dars/WhyChoose';

const Dars = () => {
  return (
    <div>
      <Header cover={dars} title={'Dispute Adjudication and Resolution Service (DARS)'} />
      {/* OverView */}
      <OverView />
      {/* Key Feature */}
      <KeyFeature />
      {/* How DARS work */}
      <HowDarsWork />
      {/* Benifit */}
      <Benifit />
      <WhyChoose />
    </div>
  );
};

export default Dars;
