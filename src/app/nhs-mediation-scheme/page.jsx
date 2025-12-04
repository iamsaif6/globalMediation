import CTA from '@/components/shared/CTA';
import React from 'react';
import heaerImage from '/public/nhs-header.jpg';
import Link from 'next/link';
import Head from 'next/head';
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

      {/* ================= HEADER (ONLY IMAGE ENABLED) ================= */}
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[137px] grid gap-[50px] grid-cols-1 lg:grid-cols-2 relative md:pt-[180px] gap-y-12 md:pb-[70px] px-5 md:px-[60px] items-center"
      >
        <div className="order-2 lg:order-1">
          <div className="min-h-[200px] lg:min-h-[400px] flex items-center justify-center lg:max-w-[1130px] mx-auto overflow-hidden rounded-3xl p-6 w-full">
            <Image
              alt="ZSL"
              className="object-cover w-full h-full rounded-3xl"
              src={heaerImage}
              priority
            />
          </div>
        </div>

        <div className="text-center order-1 lg:order-2 lg:text-left relative z-10">
          <h2 className="font-medium mb-4 leading-[120%] text-[30px] lg:text-[50px] text-white">
            NHS Resolution Mediation Service
          </h2>
          <p className="text-sm lg:text-base text-black">
            Independent mediation support, delivered by Global Mediation on behalf of NHS Resolution
            <br /><br />
            Global Mediation has been appointed by NHS Resolution to provide independent mediation services to the NHS.
          </p>
        </div>
      </header>

      {/* ================= FURTHER INFO (IMAGE DISABLED) ================= */}
      <section className="mb-10 lg:mb-20 bg-secondary pt-16 pb-10 px-5 md:px-16 md:py-[80px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="lg:text-5xl text-white mb-6 font-medium text-4xl">
              How it works
            </h2>

            <div className="space-y-4 mt-10 text-white">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2" />
                  <div>
                    <Link target="_blank" href={doc.link} className="flex items-center">
                      <strong>{doc.title}</strong>
                      <span className="ml-2">(PDF)</span>
                      <ArrowDown size={12} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* <Image src={further} alt="NHS Documentation" className="rounded-2xl" /> */}
          </div>
        </div>
      </section>

      {/* ================= MEDIATORS (IMAGE DISABLED) ================= */}
      <section className="pt-16 pb-10 px-5 md:px-16 md:py-[80px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            {/* 
            <Image
              src={panel}
              alt="Professional Mediators"
              className="rounded-2xl"
            />
            */}
          </div>

          <div>
            <h2 className="lg:text-5xl mb-6 font-medium text-4xl">Meet the mediators</h2>

            <div className="border mt-7 rounded-3xl bg-white p-6">
              <div className="grid grid-cols-2 gap-3">
                {mediators.map((mediator, index) => (
                  <Link
                    key={index}
                    href={mediator.cv}
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full" />
                    <span className="font-medium hover:underline">
                      {mediator.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= GET IN TOUCH (IMAGE DISABLED) ================= */}
      <section className="pt-16 pb-10 px-5 md:px-16 md:py-[80px] bg-secondary">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="lg:text-5xl text-white mb-6 font-medium text-4xl">
              Get in touch
            </h2>

            <button className="bg-primary mt-10 inline-block px-[38px] py-3 rounded-3xl text-white">
              <Link href="/contact">Contact us</Link>
            </button>
          </div>

          <div>
            {/* 
            <Image
              width={1000}
              height={1000}
              src="https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-6.jpg"
              alt="About Global Mediation"
              className="rounded-2xl"
            />
            */}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to resolve your dispute?"
        subTitle="Your trusted partner in conflict resolution"
        Button1Text="Schedule consultation"
        Button1Link="/contact"
      />

    </div>
  );
};

export default MainServices;