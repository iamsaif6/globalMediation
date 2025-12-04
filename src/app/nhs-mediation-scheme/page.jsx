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
  {
    number: 1,
    title: 'Submit enquiry',
    description:
      'Submit an enquiry using Global Mediation’s NHS form. We’ll collect initial case details and check eligibility.',
  },
  {
    number: 2,
    title: 'Mediator appointed',
    description:
      'Parties may nominate a mediator, or Global Mediation will appoint a suitable professional with the relevant expertise and accreditation. We carry out conflict-of-interest checks.',
  },
  {
    number: 3,
    title: 'Preparation',
    description:
      'Agree on the mediation date and format (online, in person or hybrid). We’ll support parties to prepare documents, and offer individual calls ahead of the session if needed.',
  },
  {
    number: 4,
    title: 'Mediation day',
    description:
      'Joint sessions take place with the mediator present, including private breakout spaces. Parties present their views, explore options, and negotiate with structured support.',
  },
  {
    number: 5,
    title: 'Settlement or next steps',
    description:
      'If agreement is reached, it’s written up and signed. If not, next steps are agreed and mediation feedback is collected.',
  },
];

const documents = [
  {
    title: 'NHS mediation scheme procedure',
    description:
      'What is mediation, how to prepare, what to expect & confidentiality',
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

        <meta itemProp="name" content="Services - Global Mediation" />
        <meta itemProp="description" content="" />
        <meta itemProp="image" content="" />

        <meta property="og:url" content="https://www.globalmediation.co.uk/service" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services - Global Mediation" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Global Mediation" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>

      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[137px] borer grid gap-[50px] grid-cols-1 lg:grid-cols-2 relative md:pt-[180px] gap-y-12 lg:gap-y-0 md:pb-[70px] px-5 md:px-[60px] items-center"
      >
        <div className="order-2 lg:order-1">
          <div className="min-h-[200px] lg:min-h-[400px] flex items-center justify-center lg:max-w-[1130px] mx-auto overflow-hidden rounded-3xl p-6 w-full">
            <Image
              alt="ZSL"
              className="object-cover w-full h-full rounded-3xl"
              src={heaerImage}
            />
          </div>
        </div>

        <div className="text-center order-1 lg:order-2 lg:text-left relative z-10">
          <h2 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[30px] lg:text-[50px] text-white">
            NHS Resolution Mediation Service
          </h2>
          <p className="justify-center lg:justify-start items-center text-sm lg:text-base text-black">
            Independent mediation support, delivered by Global Mediation on behalf
            of NHS Resolution
            <br />
            <br />
            Global Mediation has been appointed by NHS Resolution to provide
            independent mediation services to the NHS for the resolution of
            personal injury and clinical negligence claims.
            <br />
            <br />
            The service provides impartial, highly structured support for
            resolving disputes that arise within NHS settings.
            <br />
            <br />
            Mediators are accredited, experienced, and approved by NHS Resolution.
          </p>
        </div>
      </header>

      {/* Further Information Section */}
      <section className="mb-10 lg:mb-20 bg-secondary pt-16 pb-10 px-5 md:px-16 md:py-[80px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-left mb-16">
              <h2 className="lg:text-5xl !text-white mb-6 font-medium text-4xl md:text-5xl leading-[120%]">
                How it works
              </h2>
            </div>

            <div className="space-y-4 mt-10 text-white">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <Link
                      target="_blank"
                      href={doc?.link}
                      className="font-normal text-gray-800 flex items-center"
                    >
                      <strong className="text-white">{doc.title}</strong>{' '}
                      <span className="text-white font-medium">(PDF)</span>
                      <p className="bg-primary ml-2 p-[2px] text-white rounded-full">
                        <ArrowDown size={12} />
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

          <div>
            <h2 className="lg:text-5xl text-purple-800 mb-6 font-medium text-4xl md:text-5xl leading-[120%]">
              Meet the mediators
            </h2>

            <div className="border border-gray-200 mt-7 rounded-3xl bg-white">
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {mediators.map((mediator, index) => (
                    <Link
                      key={index}
                      href={mediator.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span className="text-black font-medium hover:underline">
                        {mediator.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Global Mediation Section */}
      <section className="pt-16 pb-10 px-5 md:px-16 md:py-[80px] bg-secondary">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="lg:text-5xl !text-white mb-6 font-medium text-4xl md:text-5xl leading-[120%]">
              Get in touch
            </h2>
 <p className="text-white text-base md:text-lg  leading-[150%]">                   To refer a case, request further information, or discuss commissioning options, please get in touch using the contact                   form. A member of our team will respond promptly.                 </p>                 <button                   className={bg-primary mt-10 inline-block border-primary font-semibold text-lg text-[#FCFCFD] px-[38px] py-3 rounded-3xl lg:rounded-[40px]}                 >                   <Link className="w-full" href="/contact">                     Contact us                   </Link>                 </button>               

          </div>

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