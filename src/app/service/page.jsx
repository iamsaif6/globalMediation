import Header from '@/components/shared/Header';
import React from 'react';
import serviceHeader from '/public/service_header.png';
import Introduction from '@/components/service/Introduction';
import Tabs from '@/components/service/Tabs';

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
    </div>
  );
};

export default Service;
