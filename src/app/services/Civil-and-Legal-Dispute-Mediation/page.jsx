import Header from '@/components/shared/Header';
import React from 'react';
import service1 from '/public/service1.jpg';
import Image from 'next/image';
import Introduction from '@/components/service/Introduction';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import Map from '@/components/service/Map';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';
import SectionHeading from '@/components/shared/SectionHeading';
import wayChoose from '/public/Training 1.png';
import banner from '/public/civil-banner.jpg';
import Link from 'next/link';
import overview from '/public/civil-overview.jpg';
import support from '/public/civil-support.jpg';
import works from '/public/civil-works.jpg';

const faqData = [
  {
    key: 1,
    question: 'Is civil mediation legally binding?',
    answer: 'The outcome isn’t automatically binding, but it can be formalised through legal agreement if both parties choose.',
  },
  {
    key: 2,
    question: 'Can I use mediation instead of going to court?',
    answer: 'Yes — mediation is a recognised alternative to litigation in many civil cases',
  },
  {
    key: 3,
    question: 'Do I need a solicitor to take part?',
    answer: 'No, but you’re welcome to involve legal representation if you prefer.',
  },
];

const page = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('${banner.src}'), linear-gradient(to right, rgba(62,0,101,0.60) 1.68%, rgba(62,0,101,0.15) 69.4%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
        className=" pt-[187px] h-screen relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
          <h1 className="font-semibold tracking-[-4%] max-w-[900px] leading-[120%] text-5xl md:[55px] lg:text-[65px] text-white">
            Civil & Legal Dispute Mediation
          </h1>
          <p className="text-white mt-[18px] max-w-[700px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
            A practical, impartial way to resolve legal disagreements without the time, stress, and cost of going to court.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-4">
            <button
              className={`bg-primary border w-full md:w-auto border-primary font-normal text-lg text-[#FCFCFD] px-12 py-3 rounded-[40px]`}
            >
              <Link className="w-full" href={'/contact-us'}>
                Speak to a Civil Mediation Specialist
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
        title={'of Civil & Legal Disputes'}
        image={overview}
        subtitle={
          'Legal disputes can be stressful, expensive, and time-consuming. Mediation offers a simpler route, one that puts you in control, avoids the courtroom, and supports better outcomes for all involved. Whether you’re facing a financial, property, or personal disagreement, civil mediation helps you reach a fair agreement, quickly and with less conflict.'
        }
        items={[
          'Reduces costs compared to formal litigation',
          'Helps preserve relationships and avoid escalation',
          'Neutral, confidential, and easy to arrange',
          'Keeps the outcome in your hands',
        ]}
      />
      {/*  */}

      <section className="py-16 md:py-[80px]">
        <div className="px-5 md:px-16 mb-[120px] ">
          <SectionHeading title={'Types of Civil Disputes We Support'} />
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
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={support} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">
                        Our trained mediators help resolve a wide range of civil and legal disputes, including:
                      </h3>
                      <ul className="text-[#667085] text-lg">
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Property or tenancy disagreements</span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Contract or commercial disputes</span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Consumer complaints and service issues</span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Neighbourhood or boundary conflicts</span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>Will, trust, or inheritance disagreements</span>
                        </li>
                      </ul>
                      {/* <div className="mt-9">
                        <Button title={'Resolve Workplace Disputes Today'} href="#" />
                      </div> */}
                    </div>
                  </div>
                  <div className="relative  max-h-[600px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={support} />
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
          <SectionHeading title={'How Civil Mediation Works'} />
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
                      We provide a fair, impartial process that allows both parties to be heard and work toward a resolution, without going
                      to court.
                    </p>
                    <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
                      <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={works} />
                    </div>
                    <div>
                      <ol className="text-[#667085] text-lg">
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Contact us <br />
                            We’ll help determine if mediation is suitable for your situation
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Prepare for your session
                            <br />
                            Each party shares their side of the story, supported if needed
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Mediation session
                            <br />
                            Our mediator facilitates a structured, confidential conversation
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Agreement
                            <br />
                            If successful, we can document a written agreement for both parties
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="relative  max-h-[600px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
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
        <h1 className="text-4xl md:text-5xl font-medium text-center max-w-[760px] mx-auto leading-[120%] mb-8 md:mb-[78px]">
          Why Choose Global Mediation?
        </h1>
        <p className=" text-lg md:text-[20px] leading-[150%] mb-[56px] md:mb-[78px]">
          We’ve helped resolve thousands of civil and legal disputes, with a calm, professional approach that saves time, reduces stress,
          and restores control.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="hidden md:block md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden h-[327px] w-full  lg:max-w-[420px] bg-blue-900">
            <Image alt="Why Choose Global Mediation for Workplace Conflicts" className="object-cover h-full w-full" src={wayChoose} />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="mb-6 font-semibold text-lg md:text-2xl">What sets us apart:</p>
            <ul className="space-y-6 text-base md:text-[20px]">
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className=" font-normal leading-[140%]">Highly experienced civil dispute mediators</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="font-normal leading-[140%]">Trusted by individuals, legal professionals, and local authorities</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className=" font-normal leading-[140%]">Tailored support that reflects the complexity of your case</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className=" font-normal leading-[140%]">Clear, impartial guidance every step of the way</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MediationCalculation />
      <FeedbackCarousel title={'What Clients Say'} subTitle={null} />
      {/* <Map /> */}
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Ready to Resolve Your Dispute?'}
          subTitle={
            'Whether you’re navigating a legal disagreement, or advising someone who is, we’re here to help you find a fair way forward.'
          }
          Button1Link={'/contact-us'}
          Button1Text={'Book a Civil Mediation Session'}
          Button2Text={'Speak to Our Mediation Team'}
          Button2Link={'/contact-us'}
        />
      </div>
      <FAQ title={'FAQs About Civil & Legal Mediation'} buttonText={'Ask Us a Question'} buttonLink={'/contact-us'} faqData={faqData} />
    </div>
  );
};

export default page;
