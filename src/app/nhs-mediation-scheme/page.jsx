import CTA from '@/components/shared/CTA';
import React from 'react';
// import heaerImage from '/public/nhs-logo-880x4951.png';
import heaerImage from '/public/nhs-header.jpg';
import Link from 'next/link';
import Head from 'next/head';
import about from '/public/nhs-about.jpg';
import further from '/public/further-info.jpg';
import panel from '/public/mediation_panel.jpg';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export const metadata = {
  title: 'NHS Mediation Scheme',
  description:
    'Global Mediation offers cost-effective, efficient and confidential mediation services for a broad range of personal or professional disputes.',
};

const mediators = [
  { name: 'Caroline Lowe', cv: '/PDF/Caroline Lowe CV FINAL.pdf' },
  { name: 'Erica Power', cv: '/PDF/Erica Power CV FINAL.pdf' },
  { name: 'Gareth Thompson', cv: '/PDF/Gareth Thompson CV FINAL.pdf' },
  { name: 'Henry Minto', cv: '/PDF/Henry Minto CV FINAL.pdf' },
  { name: 'Laura Elfield', cv: '/PDF/Laura Elfield CV FINAL.pdf' },
  { name: 'Martin Forde KC', cv: '/PDF/Martin Forde KC CV FINAL.pdf' },
  { name: 'Tabitha Nice', cv: '/PDF/Tabitha Nice CV FINAL.pdf' },
  { name: 'Tessa Herman', cv: '/PDF/Tessa Herman CV FINAL.pdf' },
];

const steps = [
  { number: 1, title: 'Submit enquiry', description: 'Submit an enquiry using Global Mediation’s NHS form. We’ll collect initial case details and check eligibility.' },
  { number: 2, title: 'Mediator appointed', description: 'Parties may nominate a mediator, or Global Mediation will appoint a suitable professional with the relevant expertise and accreditation. We carry out conflict-of-interest checks.' },
  { number: 3, title: 'Preparation', description: 'Agree on the mediation date and format (online, in person or hybrid). We’ll support parties to prepare documents, and offer individual calls ahead of the session if needed.' },
  { number: 4, title: 'Mediation day', description: 'Joint sessions take place with the mediator present, including private breakout spaces. Parties present their views, explore options, and negotiate with structured support.' },
  { number: 5, title: 'Settlement or next steps', description: 'If agreement is reached, it’s written up and signed. If not, next steps are agreed and mediation feedback is collected.' },
];

const documents = [
  {
    title: 'NHS mediation scheme procedure',
    description: 'What is mediation, how to prepare, what to expect & confidentiality',
    link: '/PDF/NHS Resolution  Claims Mediation  Service Procedure- 2025.pdf',
  },
  {
    title: 'Specimen Mediation Agreement',
    description: '',
    link: '/PDF/NHS Model Hybrid Mediation Agreement- January 2025.pdf',
  },
  {
    title: 'Post mediation feedback form',
    description: '',
    link: '/PDF/Feedback Questionnaire.pdf',
  },
];

const MainServices = () => {
  return (
    <div>
      <Head>
        <title>Services - Global Mediation</title>
        <meta name="description" content="" />
      </Head>

      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[137px] borer grid gap-[50px] grid-cols-1 lg:grid-cols-2 relative md:pt-[180px] gap-y-12 lg:gap-y-0  md:pb-[70px] px-5 md:px-[60px] items-center"
      >
        <div className="order-2 lg:order-1">
          <div className="min-h-[200px] lg:min-h-[400px] flex items-center justify-center lg:max-w-[1130px] mx-auto overflow-hidden rounded-3xl p-6 w-full">
            <Image alt="ZSL" className="object-cover w-full h-full rounded-3xl" src={heaerImage} />
          </div>
        </div>
      </header>

      {/* Further Information Section */}
      <section className="mb-10 lg:mb-20 bg-secondary pt-16 pb-10 px-5 md:px-16 md:py-[80px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div />
          <div className="lg:pl-8">
            <div className="relative">
              {/* <Image src={further} alt="NHS Documentation" className="w-full h-auto rounded-2xl shadow-lg" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mediators Panel Section */}
      <section className="pt-16 pb-10 px-5 md:px-16 md:py-[80px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="">
            <div className="relative">
              {/* 
              <Image
                src={panel}
                alt="Professional Mediators"
                className="w-full max-h-[700px] object-cover h-auto rounded-2xl shadow-lg"
              /> 
              */}
            </div>
          </div>
        </div>
      </section>

      {/* About Global Mediation Section */}
      <section className="pt-16 pb-10 px-5 md:px-16 md:py-[80px] bg-secondary">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div />
          <div className="lg:pl-8">
            <div className="relative">
              {/* 
              <Image
                width={1000}
                height={1000}
                src={'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-6.jpg'}
                alt="About Global Mediation"
                className="w-full h-auto rounded-2xl shadow-lg"
              /> 
              */}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={'Ready to resolve your dispute?'}
        subTitle={'Your trusted partner in conflict resolution'}
        Button1Text={'Schedule consultation'}
        Button1Link={'/contact'}
      />
    </div>
  );
};

export default MainServices;