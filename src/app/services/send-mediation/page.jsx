import Header from '@/components/shared/Header';
import React from 'react';
import service1 from '/public/send-1.jpg';
import send2 from '/public/send-2.jpg';
import send3 from '/public/send3.jpg';
import Button from '@/components/shared/Button';
import Image from 'next/image';
import Introduction from '@/components/service/Introduction';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import Map from '@/components/service/Map';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';
import SectionHeading from '@/components/shared/SectionHeading';
import wayChoose from '/public/Training 1.png';
import Link from 'next/link';

const faqData = [
  {
    key: 1,
    question: 'Is SEND mediation free?',
    answer: 'Yes, in most cases it is fully funded by the local authority.',
  },
  {
    key: 2,
    question: 'Is it required before a tribunal?',
    answer: 'Yes, you’ll need to consider mediation before progressing to tribunal.',
  },
  {
    key: 3,
    question: 'Can a young person request mediation?',
    answer: 'Yes, anyone aged 16–25 can initiate or attend SEND mediation directly.',
  },
];

const page = () => {
  return (
    <div>
      <Header
        title={'SEND Mediation'}
        subTitle={
          'Specialist mediation to help resolve disagreements around Special Educational Needs and Disabilities (SEND), including EHCPs, school placements, and support provision.'
        }
        Button1Text={'Speak to a SEND Mediation Specialist'}
        Button1Link="/contact-us"
        Button2Text={'Book a Mediation Session'}
        Button2Link="/contact-us"
        cover={null}
      />
      <Introduction
        title={'of SEND Mediation'}
        image={service1}
        subtitle={
          'SEND disputes can be stressful and emotionally overwhelming, especially when they involve the wellbeing or education of a child or young person.Global Mediation provides impartial, trusted support through every stage of the SEND process.Our experienced mediators help families, young people, and local authorities work together to find respectful, balanced outcomes, with the child’s needs always at the centre.'
        }
        items={[
          'Encourages understanding and cooperation',
          'Avoids lengthy, stressful tribunal processes',
          'Promotes child-focused decisions',
          'Free of charge in most SEND cases',
        ]}
      />
      {/*  */}

      <section className="py-16 md:py-[80px] bg-secondary text-white">
        <div className="px-5 md:px-16 lg:mb-[120px] ">
          <SectionHeading fullWidth title={'Types of SEND Disputes We Support'} />
        </div>
        <div className="mt-[42px] md:mt-[54px]">
          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid grid-cols-2 items-center gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="relative my-10 h-[303px] lg:h-[403px] block md:hidden  rounded-3xl overflow-hidden">
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={send2} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium  mb-8 md:mb-6">
                        SEND mediation can help resolve disagreements around:
                      </h3>
                      <ul className=" text-lg">
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Educational Health and Care Plan (EHCP) decisions</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>School or placement offers</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Level or type of support provided</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Delays or breakdowns in communication</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Appeals prior to SEND tribunal</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center md:block">
                      <button className=" bg-white  mt-10  font-semibold text-lg text-black px-12 py-3 rounded-[40px] ">
                        <Link className="w-full  " href="/contact-us">
                          Book Send Mediation
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="relative  h-[303px] lg:h-[403px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={send2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      {/* <section className="py-16 md:py-[80px]">
        <div className="px-5 md:px-16 mb-[120px] ">
          <SectionHeading
            subTitle={
              'Our role is to support everyone involved in reaching a fair outcome, one that respects the voices of the child, their family, and the professionals supporting them.'
            }
            title={'Understanding the SEND Mediation Process'}
          />
        </div>
        <div className="mt-[42px] md:mt-[54px]">
          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid items-center grid-cols-2 gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={send3} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium text-black mb-8 md:mb-6">How SEND mediation works:</h3>
                      <ol className="text-[#667085] text-lg">
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Contact our team <br />
                            We’ll talk you through the process and your options
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Arrange a mediation session <br />
                            We organise a neutral space (virtual or in-person)
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Mediation session <br />
                            All parties are supported to share their views, explore options, and agree a way forward
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Agreement summary
                            <br />
                            We provide a written record of outcomes, which can support the formal SEND process
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="relative  h-[303px] lg:h-[403px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={send3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 px-5 md:px-16 md:py-[80px]">
        <SectionHeading
          title={'Understanding the SEND Mediation Process'}
          subTitle={
            'Our role is to support everyone involved in reaching a fair outcome, one that respects the voices of the child, their family, and the professionals supporting them.'
          }
          center={false}
          fullWidth={true}
        />
        <div className="grid grid-cols-3 gap-[18px] md:gap-8 my-10 md:my-[54px]">
          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              1
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Contact our team</p>
            <p>We’ll talk you through the process and your options</p>
          </div>

          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              2
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Arrange a mediation session </p>
            <p>We organise a neutral space (virtual or in-person)</p>
          </div>
          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              3
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Agreement summary</p>
            <p className="font-normal text-base md:text-lg">
              <span className="">We provide a written record of outcomes, which can support the formal SEND process</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button padding="small" title={'Request a SEND Mediation Appointment'} href="/about-us" />
        </div>
      </section>

      {/* Why Choose */}

      <section className="py-16 px-5 md:px-16 md:py-[80px] text-white bg-secondary">
        <h1 className="text-4xl md:text-5xl font-medium text-left md:text-center max-w-[760px] mx-auto leading-[120%] mb-8 md:mb-[78px]">
          Why Choose Global Mediation for SEND?
        </h1>
        <p className="text-base md:text-lg  leading-[150%] mb-[56px] md:mb-[78px]">
          We’ve helped thousands of families and local authorities resolve complex, emotionally sensitive disputes, with empathy,
          impartiality, and professionalism. <br /> <br />
          Our SEND mediation team includes experienced specialists with lived experience of the education system, disability, and youth
          support services.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="hidden md:block md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden h-[327px] w-full  lg:max-w-[420px] bg-blue-900">
            <Image alt="Why Choose Global Mediation for Workplace Conflicts" className="object-cover h-full w-full" src={wayChoose} />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="mb-6 font-semibold text-lg md:text-2xl">Why people trust us:</p>
            <ul className="space-y-6 text-base md:text-[20px]">
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">
                  SEND-accredited mediators with deep understanding of legislation
                </p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">Trusted by families, councils, and legal professionals</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">
                  Calm, inclusive approach that supports better long-term relationships
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MediationCalculation />
      <FeedbackCarousel title={'What Parents & Young People Say'} subTitle={null} fullWidth={true} />
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Start Your SEND Mediation Journey'}
          subTitle={'If you’re a parent, carer, young person or professional needing support with a SEND disagreement, we’re here to help.'}
          Button1Link={'/contact-us'}
          Button1Text={'Book a Session'}
          Button2Text={'Contact Our SEND Team'}
          Button2Link={'/contact-us'}
        />
      </div>
      <FAQ
        title={'FAQs About SEND Mediation'}
        buttonText={'Speak to a SEND Mediation Specialist'}
        buttonLink={'/contact-us'}
        faqData={faqData}
      />
    </div>
  );
};

export default page;
