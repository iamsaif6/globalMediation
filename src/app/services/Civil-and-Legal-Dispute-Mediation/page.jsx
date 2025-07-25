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
import wayChoose from '/public/vitaly-gariev-8eqP4PekHNk-unsplash.jpg';
import banner from '/public/civil-banner.jpg';
import Link from 'next/link';
import overview from '/public/civil-overview.jpg';
import support from '/public/civil-support.jpg';
import works from '/public/civil-works.jpg';
import overlay from '/public/Overlay.png';
import Button from '@/components/shared/Button';

const faqData = [
  {
    key: 1,
    question: 'Is civil mediation legally binding?',
    answer: 'The outcome isn’t automatically binding, but it can be formalised through legal agreement if both parties choose.',
  },
  {
    key: 2,
    question: 'Can I use mediation instead of going to court?',
    answer: 'Yes — mediation is a recognised alternative to litigation in many civil cases.',
  },
  {
    key: 3,
    question: 'Do I need a solicitor to take part?',
    answer: 'No — but you’re welcome to involve legal representation if you prefer.',
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
          backgroundPosition: 'center center',
        }}
        className=" pt-[187px] h-screen max-h-[950px] relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <Image src={overlay} className=" absolute top-0 left-0 w-full h-full object-cover" />
        <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
          <h1 className="font-semibold tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw] text-white">
            Civil and legal dispute mediation
          </h1>
          <p className="text-white mt-[25px] md:mt-4 mb-[25px] mr-auto max-w-[700px] md:mb-10 w-[100%] font-normal text-base md:text-lg xl:text-xl">
            A practical, impartial way to resolve legal disagreements without the time, stress, and cost of going to court.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-4">
            <button className={`bg-primary  border border-primary font-semibold text-lg text-[#FCFCFD] px-6 py-3 rounded-[40px]`}>
              <Link className="w-full" href={'/contact-us'}>
                Speak to a civil mediation specialist
              </Link>
            </button>
            {/* <button className="  bg-transparent font-semibold border border-white text-lg text-[#FCFCFD] px-[48px] py-3 rounded-[40px] ">
              <Link className="w-full  " href={'/contact-us'}>
                Book a mediation session
              </Link>
            </button> */}
          </div>
        </div>
      </header>

      <Introduction
        title={'civil & legal disputes'}
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

      <section className="py-16 md:py-[80px] bg-secondary text-white">
        <div className="px-5 md:px-16 mb-10 md:mb-[120px] ">
          <SectionHeading className={'!text-white'} fullWidth={true} title={'Types of civil disputes we support'} />
        </div>
        <div className="mt-[42px] md:mt-[54px]">
          {/* Buttons */}
          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid grid-cols-2 items-center gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={support} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium mb-8 md:mb-6 !text-white">
                        Our trained mediators help resolve a wide range of civil and legal disputes, including:
                      </h3>
                      <ul className=" text-lg">
                        <li className="flex items-center py-6 hover:text-black hover:bg-white hover:rounded-2xl group pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Property or tenancy disagreements</span>
                        </li>
                        <li className="flex items-center py-6 hover:text-black hover:bg-white hover:rounded-2xl group pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Contract or commercial disputes</span>
                        </li>
                        <li className="flex items-center py-6 hover:text-black hover:bg-white hover:rounded-2xl group pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Consumer complaints and service issues</span>
                        </li>
                        <li className="flex items-center py-6 hover:text-black hover:bg-white hover:rounded-2xl group pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Neighbourhood or boundary conflicts</span>
                        </li>
                        <li className="flex items-center py-6 hover:text-black hover:bg-white hover:rounded-2xl group pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Will, trust, or inheritance disagreements</span>
                        </li>
                      </ul>
                      {/* <div className="mt-9">
                        <Button title={'Resolve Workplace Disputes Today'} href="#" />
                      </div> */}
                    </div>
                    <div className="flex justify-center md:block">
                      <button className=" bg-white  mt-10  font-semibold text-lg text-black px-12 py-3 rounded-[40px] ">
                        <Link className="w-full  " href="/contact-us">
                          Book civil mediation
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="relative  h-[303px] lg:h-[403px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    {/* <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={support} />
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
              ' We provide a fair, impartial process that allows both parties to be heard and work toward a resolution, without going to court.'
            }
            title={'How Civil Mediation Works'}
          />
        </div>
        <div className="mt-[42px] md:mt-[54px]">

          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid items-center grid-cols-2 gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">


                    <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
  
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
                  <div className="relative  h-[303px] lg:h-[403px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">

                    <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={works} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 px-5 md:px-16 md:py-[80px]">
        <SectionHeading
          title={'How Civil Mediation Works'}
          subTitle={
            'We provide a fair, impartial process that allows both parties to be heard and work toward a resolution, without going to court.'
          }
          center={true}
        />
        <div className="grid grid-cols-4 gap-[18px] md:gap-8 my-10 md:my-[54px]">
          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              1
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Contact us </p>
            <p className="text-base md:text-lg">We’ll help determine if mediation is suitable for your situation</p>
          </div>

          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              2
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Prepare for your session</p>
            <p className="text-base md:text-lg">Each party shares their side of the story, supported if needed</p>
          </div>
          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              3
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Mediation session</p>
            <p className="font-normal text-base md:text-lg">
              <span className="">Our mediator facilitates a structured, confidential conversation</span>
            </p>
          </div>

          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              4
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Agreement</p>
            <p className="font-normal text-base md:text-lg">
              <span className="">If successful, we can document a written agreement for both parties</span>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <Button title={'Request a civil and legal dispute mediation appointment'} href="/about-us" />
        </div>
      </section>

      {/* Why Choose */}

      <section className="py-16 px-5 md:px-16 md:py-[80px] text-white bg-secondary">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-center max-w-[760px] mx-auto leading-[120%] mb-8 md:mb-[40px] !text-white">
            Why choose Global Mediation?
          </h2>
          <p className=" text-base md:text-lg leading-[150%] mb-[56px] md:mb-[78px]">
            We’ve helped resolve thousands of civil and legal disputes, with a calm, professional approach that saves time, reduces stress,
            and restores control.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
            <Image
              className="object-cover object-bottom  w-full h-full relative z-0"
              alt={'Experienced Leader In Mediation'}
              src={wayChoose}
            />
          </div>

          <div className="relative   lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
            <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={wayChoose} />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="mb-6 font-semibold text-lg md:text-2xl">What sets us apart:</p>
            <ul className="space-y-6 text-base md:text-[20px]">
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">Highly experienced civil dispute mediators</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">
                  Trusted by individuals, legal professionals, and local authorities
                </p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">
                  Tailored support that reflects the complexity of your case
                </p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">Clear, impartial guidance every step of the way</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MediationCalculation />
      <FeedbackCarousel title={'What clients say'} subTitle={null} />
      {/* <Map /> */}
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Ready to Resolve Your Dispute?'}
          subTitle={
            'Whether you’re navigating a legal disagreement, or advising someone who is, we’re here to help you find a fair way forward.'
          }
          Button1Link={'/contact-us'}
          Button1Text={'Book a civil mediation session'}
          Button2Text={'Speak to our mediation team'}
          Button2Link={'/contact-us'}
        />
      </div>
      <FAQ title={'FAQs about civil and legal mediation'} buttonText={'Ask us a question'} buttonLink={'/contact-us'} faqData={faqData} />
    </div>
  );
};

export default page;
