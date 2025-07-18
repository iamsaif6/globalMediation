import Header from '@/components/shared/Header';
import React from 'react';
import service1 from '/public/business-1.jpg';
import Button from '@/components/shared/Button';
import Image from 'next/image';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import CTA from '@/components/shared/CTA';
import FAQ from '@/components/service/FAQ';
import Link from 'next/link';
import cover from '/public/Business_Header.jpeg';
import HowWeWork from './HowWeWork';

const faqData = [
  {
    key: 1,
    question: 'How long does commercial mediation take?',
    answer: 'Most sessions last a full day, depending on the complexity of the dispute. Preparation and follow-up are included.',
  },
  {
    key: 2,
    question: 'Is the outcome legally binding?',
    answer:
      'No — agreements are not automatically legally binding, but they can be formalised into contracts or legal documents if both parties agree.',
  },
  {
    key: 3,
    question: 'Do I need a lawyer to attend mediation?',
    answer: 'No, but legal advisors can be included if you prefer. The process is designed to be flexible, accessible and collaborative.',
  },
  {
    key: 4,
    question: 'What types of disputes can you help with?',
    answer:
      'We support a wide range — including contract, partnership, client-supplier and IP-related disputes. If you’re unsure, we’re happy to advise.',
  },
];

const item2 = {
  title: 'What We Help Resolve',
  subtitle: 'We work with individuals, teams and organisations to resolve disputes such as:',
  service: [
    'Partnership and shareholder breakdowns',
    'Supplier, client or investor disagreements',
    'Contract, data and intellectual property disputes',
    'Professional negligence and construction delays',
    'Insurance or IT-related conflicts',
    'Insolvency and health and safety issues',
    'Copyright and licensing disagreements',
  ],
  image: service1,
};
const item3 = {
  title: 'Examples of What We’ve Mediated',
  subtitle: 'We work with individuals, teams and organisations to resolve disputes such as:',
  service: [
    'A complex software licensing dispute between two technology providers',
    'A shareholder breakdown threatening business continuity',
    'Supply chain tensions between a developer and contractor',
    'Multi-party insurance liability across regional teams',
    'A professional disagreement within a family-run operation',
  ],
  image: service1,
};

const item = {
  title: 'Why Choose Global Mediation',
  subtitle:
    'At Global Mediation, our experienced mediators bring commercial awareness, emotional intelligence and sensitivity to every case. We help companies avoid court, protect relationships and co-create outcomes that work — for today and the long term.',
  service: [
    'Independent, impartial mediators with real-world business experience',
    'Solutions tailored to your culture, your people and your goals',
    'A track record of helping people move from deadlock to direction',
  ],
  image: service1,
};

const page = () => {
  return (
    <div>
      <Header
        Button1Text={'Book a mediation session'}
        Button1Link="/contact-us"
        title={'Business and Commercial Mediation'}
        subTitle={
          'Business disputes can stall progress, damage relationships and drain time and energy. Whether high-value, high-stakes or emotionally charged, we help untangle complex disagreements through structured dialogue and impartial support — rebuilding trust and moving forward with clarity, care and shared understanding.'
        }
        cover={cover}
      />

      {/* Why Choose */}
      <div className={` py-16 md:py-[80px] px-5 md:px-[60px]`}>
        <div className="text-left md:text-center">
          <h1 className="w-full  mb-10 font-medium text-4xl md:text-5xl leading-[120%] ">{item.title}</h1>
          <p className="mb-[32px] md:mb-[60px] text-black text-base md:text-lg leading-[150%] my-6">{item.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
          <div className={` col-span-2 lg:col-span-1`}>
            {item.service.map(li => (
              <div
                key={li}
                className={` border-b-[0.5px] text-[#667085] group flex gap-3 items-center justify-between border-[#DAD3FF]  text-lg font-normal p-3 md:p-6`}
              >
                <div className="flex  items-center gap-[26px]">
                  <span className="w-[10px] flex-shrink-0 h-[10px] bg-primary rounded-full inline-block"></span>
                  <p>{li}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-2 order-1 lg:col-span-1 overflow-hidden   max-h-[303px] lg:max-h-[403px] rounded-[40px] relative">
            <div className={`absolute inset-0  z-10`}></div>
            {item?.image && <Image className="object-cover w-full h-full relative z-0" alt={item.title} src={item?.image} />}
          </div>
        </div>
        {/* <button className=" bg-primary  mt-10  font-semibold text-lg text-white px-3 md:px-12 py-3 rounded-[40px] ">
          <Link className="w-full  " href="/contact-us">
            Book Business and Commercial Mediation
          </Link>
        </button> */}
        <div className="mt-10 text-center">
          <p>
            Our mediators blend empathy with business sense — supporting people to reach agreements that work, built on understanding, not
            winning.
            <br />
            With over 95% of cases settled — many on the day — you can trust our process to guide you towards resolution.
          </p>
        </div>
      </div>

      {/* What we help */}
      <div className={` py-16 md:py-[80px] px-5 md:px-[60px]`}>
        <div className="text-left md:text-center">
          <h1 className="w-full  mb-10 font-medium text-4xl md:text-5xl leading-[120%] ">{item2.title}</h1>
          <p className="mb-[32px] md:mb-[60px] text-black text-base md:text-lg leading-[150%] my-6">{item2.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
          <div className="col-span-2 order-0 lg:col-span-1 overflow-hidden   max-h-[303px] lg:max-h-[403px] rounded-[40px] relative">
            <div className={`absolute inset-0  z-10`}></div>
            {item2?.image && <Image className="object-cover w-full h-full relative z-0" alt={item2.title} src={item2?.image} />}
          </div>
          <div className={` col-span-2 lg:col-span-1`}>
            {item2.service.map(li => (
              <div
                key={li}
                className={` border-b-[0.5px] text-[#667085] group flex gap-3 items-center justify-between border-[#DAD3FF]  text-lg font-normal p-3 md:p-6`}
              >
                <div className="flex  items-center gap-[26px]">
                  <span className="w-[10px] flex-shrink-0 h-[10px] bg-primary rounded-full inline-block"></span>
                  <p>{li}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <button className=" bg-primary  mt-10  font-semibold text-lg text-white px-3 md:px-12 py-3 rounded-[40px] ">
          <Link className="w-full  " href="/contact-us">
            Book Business and Commercial Mediation
          </Link>
        </button> */}
        <div className="mt-10 text-center">
          <p>If it’s causing friction, slowing progress or damaging relationships — we’ll help you navigate it.</p>
        </div>
      </div>
      <HowWeWork />

      {/* Example */}
      <div className={` py-16 md:py-[80px] px-5 md:px-[60px]`}>
        <div className="text-left md:text-center">
          <h1 className="w-full  mb-14 font-medium text-4xl md:text-5xl leading-[120%] ">{item3.title}</h1>
          {/* <p className="mb-[32px] md:mb-[60px] text-black text-base md:text-lg leading-[150%] my-6">{item2.subtitle}</p> */}
        </div>
        <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
          <div className="col-span-2 order-1 lg:col-span-1 overflow-hidden   max-h-[303px] lg:max-h-[403px] rounded-[40px] relative">
            <div className={`absolute inset-0  z-10`}></div>
            {item3?.image && <Image className="object-cover w-full h-full relative z-0" alt={item3.title} src={item3?.image} />}
          </div>
          <div className={` col-span-2 lg:col-span-1`}>
            {item3.service.map(li => (
              <div
                key={li}
                className={` border-b-[0.5px] text-[#667085] group flex gap-3 items-center justify-between border-[#DAD3FF]  text-lg font-normal p-3 md:p-6`}
              >
                <div className="flex  items-center gap-[26px]">
                  <span className="w-[10px] flex-shrink-0 h-[10px] bg-primary rounded-full inline-block"></span>
                  <p>{li}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <button className=" bg-primary  mt-10  font-semibold text-lg text-white px-3 md:px-12 py-3 rounded-[40px] ">
          <Link className="w-full  " href="/contact-us">
            Book Business and Commercial Mediation
          </Link>
        </button> */}
      </div>
      <MediationCalculation />

      <FAQ title={'FAQs About Business and Commercial Mediation'} buttonText={'Contact Us'} buttonLink={'/contact-us'} faqData={faqData} />
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Start the Conversation'}
          subTitle={'You don’t need to know exactly what you’re asking for.Just tell us what’s going on, and we’ll talk you through it.'}
          Button1Link={'/contact-us'}
          Button1Text={'Book Business Mediation'}
          Button2Link={'/contact-us'}
          Button2Text={'Contact Us'}
        />
      </div>
    </div>
  );
};

export default page;
