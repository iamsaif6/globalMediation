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
      <Header
        cover={dars}
        title={'Dispute Adjudication and Resolution Service (DARS)'}
        subTitle={'A fair, impartial, and efficient way to resolve disputes when mediation is not suitable or has not led to agreement.'}
      />
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
