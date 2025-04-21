import React from 'react';
import Image from 'next/image';
import Introduction from '@/components/service/Introduction';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import Map from '@/components/service/Map';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';
import SectionHeading from '@/components/shared/SectionHeading';
import wayChoose from '/public/Training 1.png';
import headerImage from '/public/community-banner.jpg';
import Link from 'next/link';
import overview from '/public/community-Overview.jpg';
import dispute from '/public/community-dispute.jpg';
import works from '/public/community-works.jpg';

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
      <header
        style={{
          backgroundImage: `url('${headerImage.src}'), linear-gradient(to right, rgba(62,0,101,0.60) 1.68%, rgba(62,0,101,0.15) 69.4%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        className=" pt-[187px] h-screen relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
          <h1 className="font-semibold tracking-[-4%] max-w-[900px] leading-[120%] text-5xl md:[55px] lg:text-[65px] text-white">
            Community Mediation
          </h1>
          <p className="text-white mt-[18px] max-w-[700px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
            Supportive, impartial mediation to help neighbours and local residents resolve disputes fairly, calmly and constructively —
            before things escalate.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-4">
            <button
              className={`bg-primary border w-full md:w-auto border-primary font-normal text-lg text-[#FCFCFD] px-12 py-3 rounded-[40px]`}
            >
              <Link className="w-full" href={'/contact-us'}>
                Speak to a Community Mediator
              </Link>
            </button>
            <button className=" w-full md:w-auto bg-transparent font-normal border border-white text-lg text-[#FCFCFD] px-[48px] py-3 rounded-[40px] ">
              <Link className="w-full  " href={'/contact-us'}>
                Book a Mediation Session
              </Link>
            </button>
          </div>
        </div>
      </header>
      <Introduction
        title={'of Community Disputes & Mediation'}
        image={overview}
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
                <div className=" grid grid-cols-2 items-center gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
                      {/* <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={dispute} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium text-black mb-8 md:mb-6">
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
                    </div>
                  </div>
                  <div className="relative  h-[303px] lg:h-[403px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    {/* <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={dispute} />
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
          <SectionHeading
            subTitle={
              ' Our process gives everyone a chance to be heard, without judgement. It’s about finding common ground and working toward respectful solutions.'
            }
            title={'How Community Mediation Works'}
          />
        </div>
        <div className="mt-[42px] md:mt-[54px]">
          {/* Buttons */}
          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid grid-cols-2 items-center gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
                      {/* <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={works} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium text-black mb-8 md:mb-6">The process:</h3>
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
                  <div className="relative  h-[303px] lg:h-[403px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    {/* <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={works} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}

      <section className="py-16 px-5 md:px-16 md:py-[80px] text-white bg-secondary">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-center max-w-[760px] mx-auto leading-[120%] mb-8 md:mb-[40px]">
            Why Choose Global Mediation?
          </h1>
          <p className=" text-base md:text-lg leading-[150%] mb-[56px] md:mb-[78px]">
            We’ve helped thousands of people resolve conflicts with neighbours, landlords and community members — in ways that feel fair,
            respectful and lasting.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="hidden md:block md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden h-[303px] lg:h-[403px] w-full  lg:max-w-[420px] bg-blue-900">
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
