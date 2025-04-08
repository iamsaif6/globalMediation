import Header from '@/components/shared/Header';
import React from 'react';
import service1 from '/public/service1.jpg';
import Button from '@/components/shared/Button';
import Image from 'next/image';
import Introduction from '@/components/service/Introduction';
import Tabs from '@/components/service/Tabs';
import WhyChoose from '@/components/service/WhyChoose';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import Map from '@/components/service/Map';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';
import SectionHeading from '@/components/shared/SectionHeading';
import wayChoose from '/public/Training 1.png';

const faqData = [
  {
    key: 1,
    question: 'Is mediation confidential?',
    answer: 'Yes. What’s said in the session stays private unless everyone agrees to share it.',
  },
  {
    key: 2,
    question: 'Do we have to meet face-to-face?',
    answer: 'No — we offer online, phone or separate meetings if that’s more comfortable.',
  },
  {
    key: 3,
    question: 'What if the other person won’t take part?',
    answer: 'We’ll reach out to them and explain how it works. Mediation is voluntary, but we encourage people to give it a try.',
  },
];

const page = () => {
  return (
    <div>
      <Header
        title={'Community Mediation'}
        subTitle={
          'Supportive, impartial mediation to help neighbours and local residents resolve disputes fairly, calmly and constructively — before things escalate.'
        }
        Button1Text={'Speak to a Community Mediator'}
        Button1Link="/contact-us"
        Button2Text={'Book a Mediation Session]'}
        Button2Link="/contact-us"
        cover={null}
      />
      <Introduction
        title={'of Community Disputes & Mediation'}
        image={service1}
        subtitle={
          'Disagreements in our communities can have a big impact — on wellbeing, relationships and daily life.Global Mediation provides a calm, neutral space to talk things through and find a positive way forward.Whether you’re dealing with a neighbour issue, noise complaint or local dispute, we’ll support you with care, fairness and respect.'
        }
        items={[
          'Encourages understanding and better communication',
          'Helps prevent problems from escalating further',
          'Restores peace and connection in your local area',
          'Easy to access and confidential',
        ]}
      />
      {/*  */}

      <section className="py-16 md:py-[80px]">
        <div className="px-5 md:px-16 mb-[120px] ">
          <SectionHeading title={'Common Community Disputes'} />
        </div>
        <div className="mt-[42px] md:mt-[54px]">
          {/* Buttons */}
          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid grid-cols-2 gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    {/* <h1 className="font-medium text-4xl md:text-[42px] leading-[120%]">{title}</h1> */}
                    {/* <p className="text-[#667085] capitalize text-base md:text-base leading-[180%] my-10">
                      SEND mediation can help resolve disagreements around:
                    </p> */}
                    <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
                      <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">
                        We work with individuals, landlords, housing providers and councils to resolve:
                      </h3>
                      <ul className="text-[#667085] text-lg">
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Noise or anti-social behaviour complaints</span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Disputes between neighbours or households</span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Property, boundary or shared space issues</span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Breakdowns in community or resident relationships</span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Conflicts between tenants and housing services</span>
                        </li>
                      </ul>
                      {/* <div className="mt-9">
                        <Button title={'Resolve Workplace Disputes Today'} href="#" />
                      </div> */}
                    </div>
                  </div>
                  <div className="relative  max-h-[600px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="py-16 md:py-[80px]">
        <div className="px-5 md:px-16 mb-[120px] ">
          <SectionHeading title={'How Community Mediation Works'} />
        </div>
        <div className="mt-[42px] md:mt-[54px]">
          {/* Buttons */}
          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid grid-cols-2 gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    {/* <h1 className="font-medium text-4xl md:text-[42px] leading-[120%]">{title}</h1> */}
                    <p className="text-[#667085] capitalize text-base md:text-base leading-[180%] my-10">
                      Our process gives everyone a chance to be heard, without judgement. It’s about finding common ground and working
                      toward respectful solutions.
                    </p>
                    <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
                      <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">The process:</h3>
                      <ol className="text-[#667085] text-lg">
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Contact us <br />
                            We’ll talk you through the process and check if mediation is right for you
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Arrange a session
                            <br />
                            You’ll meet with one of our trained community mediators, together or separately
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Talk through the issue
                            <br />
                            Each person can explain how they see things and what matters to them
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Agree a way forward
                            <br />
                            We’ll help you reach an outcome that works for everyone involved
                          </span>
                        </li>
                      </ol>
                      {/* <div className="mt-9">
                        <Button title={'Request a SEND Mediation Appointment'} href="/about-us" />
                      </div> */}
                    </div>
                  </div>
                  <div className="relative  max-h-[600px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}

      <section className="py-16 px-5 md:px-16 md:py-[80px] text-white bg-secondary">
        <h1 className="text-4xl md:text-5xl font-medium text-center max-w-[760px] mx-auto leading-[120%] mb-8 md:mb-[78px]">
          Why Choose Global Mediation?
        </h1>
        <p className=" text-lg md:text-[20px] leading-[150%] mb-[56px] md:mb-[78px]">
          We’ve helped thousands of people resolve conflicts with neighbours, landlords and community members — in ways that feel fair,
          respectful and lasting.
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
                <p className=" font-normal leading-[140%]">Approachable mediators who understand local issues</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="font-normal leading-[140%]">Supportive, down-to-earth approach</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className=" font-normal leading-[140%]">Trusted by housing associations and councils across the UK</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className=" font-normal leading-[140%]">Focused on helping people live together more peacefully</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MediationCalculation />
      <FeedbackCarousel title={'What People Say'} subTitle={null} />
      <Map />
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Ready to Resolve a Dispute?'}
          subTitle={'We’re here to help you sort things out — before it goes any further.You don’t need to face it alone.'}
          Button1Link={'/contact-us'}
          Button1Text={'Speak to a Mediator'}
          Button2Text={'Get Support Now'}
          Button2Link={'/contact-us'}
        />
      </div>
      <FAQ title={'FAQs About Community Mediation'} buttonText={'Ask Us a Question'} buttonLink={'/contact-us'} faqData={faqData} />
    </div>
  );
};

export default page;
