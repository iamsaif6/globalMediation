import Header from '@/components/shared/Header';
import React from 'react';
import service1 from '/public/business-1.jpg';
import service3 from '/public/global_2025-6.jpg';
import Image from 'next/image';
import CTA from '@/components/shared/CTA';
import FAQ from '@/components/service/FAQ';
import HowWeWork from './HowWeWork';

const service2 = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/redd-francisco-5U_28ojjgms-unsplash.jpg';
// const service3 = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';
const cover = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/Business_Header.jpeg';

const faqData = [
  {
    key: 1,
    question: 'How Long Does Commercial Mediation Take?',
    answer: 'Most sessions last a full day, depending on the complexity of the dispute. Preparation and follow-up are included.',
  },
  {
    key: 2,
    question: 'Is the Outcome Legally Binding?',
    answer:
      'No — agreements are not automatically legally binding, but they can be formalised into contracts or legal documents if both parties agree.',
  },
  {
    key: 3,
    question: 'Do I Need a Lawyer to Attend Mediation?',
    answer: 'No, but legal advisors can be included if you prefer. The process is designed to be flexible, accessible and collaborative.',
  },
  {
    key: 4,
    question: 'What Types of Disputes Can You Help With?',
    answer:
      'We support a wide range — including contract, partnership, client-supplier and IP-related disputes. If you’re unsure, we’re happy to advise.',
  },
];

const item2 = {
  title: 'What We Help Resolve',
  subtitle:
    'If it’s causing friction, slowing progress or damaging relationships — we’ll help you navigate it. We work with individuals, teams and organisations to resolve disputes such as:',
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
    'A Complex Software Licensing Dispute Between Two Technology Providers',
    'A Shareholder Breakdown Threatening Business Continuity',
    'Supply Chain Tensions Between a Developer and Contractor',
    'Multi-Party Insurance Liability Across Regional Teams',
    'A Professional Disagreement Within a Family-Run Operation',
  ],
  image: service2,
};

const item = {
  title: 'Why Choose Global Mediation',
  subtitle:
    'At Global Mediation, our experienced mediators bring commercial awareness, emotional intelligence and sensitivity to every case. We help companies avoid court, protect relationships and co-create outcomes that work — for today and the long term. Our mediators blend empathy with business sense — supporting people to reach agreements that work, built on understanding, not winning. With over 95% of cases settled — many on the day — you can trust our process to guide you towards resolution.',
  service: [
    'Independent, impartial mediators with real-world business experience',
    'Solutions tailored to your culture, your people and your goals',
    'A track record of helping people move from deadlock to direction',
  ],
  image: service3,
};

const page = () => {
  return (
    <div>
      <Header
        Button1Text={'Book a Mediation Session'}
        Button1Link="/contact"
        title={'Business and Commercial Mediation'}
        subTitle={
          'Business disputes can stall progress, damage relationships and drain time and energy. Whether high-value, high-stakes or emotionally charged, we help untangle complex disagreements through structured dialogue and impartial support — rebuilding trust and moving forward with clarity, care and shared understanding.'
        }
        cover={cover}
      />

      {/* Why Choose */}
      <div className={` py-10 md:py-[80px] px-5 md:px-[60px]`}>
        <div className="text-left md:text-center">
          <h2 className="w-full  mb-10 font-medium text-4xl md:text-5xl leading-[120%] ">{item.title}</h2>
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
            {item?.image && (
              <Image width={1200} height={1200} className="object-cover w-full h-full relative z-0" alt={item.title} src={item?.image} />
            )}
          </div>
        </div>
      </div>

      {/* What we help */}
      <div className={` py-10 md:py-[80px] px-5 md:px-[60px]`}>
        <div className="text-left md:text-center">
          <h2 className="w-full  mb-10 font-medium text-4xl md:text-5xl leading-[120%] ">{item2.title}</h2>
          <p className="mb-[32px] md:mb-[60px] text-black text-base md:text-lg leading-[150%] my-6">{item2.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
          <div className="relative lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
            {item2?.image && (
              <Image width={1200} height={1200} className="object-cover w-full h-full relative z-0" alt={item2.title} src={item2?.image} />
            )}
          </div>

          <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
            {item2?.image && (
              <Image width={1200} height={1200} className="object-cover w-full h-full relative z-0" alt={item2.title} src={item2?.image} />
            )}
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
      </div>
      <HowWeWork />

      {/* Example */}
      <div className={` py-10 md:py-[80px] px-5 md:px-[60px]`}>
        <div className="text-left md:text-center">
          <h2 className="w-full  mb-14 font-medium text-4xl md:text-5xl leading-[120%] ">{item3.title}</h2>
        </div>
        <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
          <div className="relative   lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
            {item3?.image && (
              <Image width={1200} height={1200} className="object-cover w-full h-full relative z-0" alt={item3.title} src={item3?.image} />
            )}
          </div>

          <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
            {item3?.image && (
              <Image width={1200} height={1200} className="object-cover w-full h-full relative z-0" alt={item3.title} src={item3?.image} />
            )}
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
      </div>
      {/* <MediationCalculation /> */}

      <FAQ title={'FAQs About Business and Commercial Mediation'} buttonText={'Contact Us'} buttonLink={'/contact'} faqData={faqData} />
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Start the Conversation'}
          subTitle={'You don’t need to know exactly what you’re asking for.Just tell us what’s going on, and we’ll talk you through it.'}
          Button1Link={'/contact'}
          Button1Text={'Book Business Mediation'}
          Button2Link={'/contact'}
          Button2Text={'Contact Us'}
        />
      </div>
    </div>
  );
};

export default page;
