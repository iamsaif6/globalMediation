import Header from '@/components/shared/Header';
import React from 'react';
import Image from 'next/image';
import Introduction from '@/components/service/Introduction';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import Map from '@/components/service/Map';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';
import SectionHeading from '@/components/shared/SectionHeading';
import wayChoose from '/public/musemind-ux-agency-9tn3JFeAc08-unsplash.jpg';
import banner from '/public/family-banner2.jpg';
import overview from '/public/family-overview.jpg';
import dispute from '/public/family-dispute.jpg';
import works from '/public/family-works.jpg';
import Link from 'next/link';

const faqData = [
  {
    key: 1,
    question: 'Is family mediation legally binding?',
    answer: 'No — but written agreements can be made into formal court orders if both parties agree.',
  },
  {
    key: 2,
    question: 'Can children be involved in the mediation?',
    answer: 'Yes — with parental agreement, older children can be consulted as part of the process.',
  },
  {
    key: 3,
    question: 'How many sessions will we need?',
    answer: 'Most disputes are resolved within one to three sessions, depending on complexity.',
  },
];

const page = () => {
  return (
    <div>
      <Header
        title={'Family Mediation'}
        subTitle={
          'Calm, impartial support to help you resolve family issues around parenting, separation or finances, with everyone’s voice heard.'
        }
        Button1Text={'Speak to a family mediator'}
        Button1Link="/contact-us"
        Button2Text={'Book a confidential mediation session'}
        Button2Link="/contact-us"
        cover={banner}
      />
      <Introduction
        title={'family mediation'}
        image={overview}
        subtitle={
          'Family mediation offers a safe, supportive space to work through difficult issues and find a way forward together.Whether you’re separating, making parenting arrangements or resolving financial matters, we help families navigate change with clarity and care.It’s a calmer, more constructive alternative to court, focused on communication, mutual understanding and long-term wellbeing.'
        }
        items={[
          'Focuses on the child’s needs and wellbeing',
          'Encourages better communication between family members',
          'Helps reach practical, lasting agreements',
          'Quicker, more affordable than court',
        ]}
      />
      {/*  */}

      <section className="py-16 bg-secondary text-white md:py-[80px]">
        <div className="px-5 md:px-16 md:mb-[120px] ">
          <SectionHeading className={'!text-white'} fullWidth={true} title={'Common Family Disputes We Help With'} />
        </div>
        <div className="mt-[42px] md:mt-[54px]">
          {/* Buttons */}
          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid items-center grid-cols-2 gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
                      <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={dispute} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium  mb-8 md:mb-6 !text-white">Family mediation can support you with:</h3>
                      <ul className=" text-lg">
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Child contact and living arrangements</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Parenting plans and co-parenting decisions</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Separation or divorce-related disputes</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Financial agreements after relationship breakdown</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Disagreements involving extended family or guardianship</span>
                        </li>
                      </ul>
                      {/* <div className="mt-9">
                        <Button title={'Resolve Workplace Disputes Today'} href="#" />
                      </div> */}
                    </div>
                    <div className="flex justify-center md:block">
                      <button className=" bg-white  mt-10  font-semibold text-lg text-black px-12 py-3 rounded-[40px] ">
                        <Link className="w-full  " href="/contact-us">
                          Book family mediation
                        </Link>
                      </button>
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

      {/* <section className="py-16 md:py-[80px]">
        <div className="px-5 md:px-16 mb-[120px] ">
          <SectionHeading
            subTitle={
              ' Our mediators offer structured, compassionate guidance — helping you have difficult conversations in a safe and supportive way.'
            }
            title={'How Family Mediation Works'}
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
                      <h3 className="md:text-2xl text-lg font-medium text-black mb-8 md:mb-6">The family mediation process:</h3>
                      <ol className="text-[#667085] text-lg">
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Get in touch <br />
                            We’ll answer your questions and explain how mediation works
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Schedule a session
                            <br />
                            Meet online or in person with a trained family mediator
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Share your views
                            <br />
                            Each person has space to speak openly and be heard
                          </span>
                        </li>
                        <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                          <span>
                            Work toward an agreement
                            <br />
                            Our mediator helps guide the conversation toward solutions
                          </span>
                        </li>
                      </ol>
                      <div className="mt-9">
                        <Button title={'Request a SEND Mediation Appointment'} href="/about-us" />
                      </div>
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
          title={'How Family Mediation Works'}
          subTitle={
            'Our mediators offer structured, compassionate guidance — helping you have difficult conversations in a safe and supportive way.'
          }
          fullWidth={true}
        />
        <div className="grid grid-cols-4 gap-[18px] md:gap-8 my-10 md:my-[54px]">
          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              1
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Get in touch </p>
            <p>We’ll answer your questions and explain how mediation works</p>
          </div>

          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              2
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Schedule a session</p>
            <p>Meet online or in person with a trained family mediator</p>
          </div>
          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              3
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Share your views</p>
            <p className="font-normal text-base md:text-lg">
              <span className="">Each person has space to speak openly and be heard</span>
            </p>
          </div>

          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              4
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Work toward an agreement</p>
            <p className="font-normal text-base md:text-lg">
              <span className="">Our mediator helps guide the conversation toward solutions</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" bg-primary  mt-10  font-semibold text-lg text-white px-3 lg:px-12 py-3 rounded-[40px] ">
            <Link className="w-full  " href="/about-us">
              Request a family mediation appointment
            </Link>
          </button>
        </div>
      </section>

      {/* Why Choose */}

      <section className="py-16 px-5 md:px-16 md:py-[80px] text-white bg-secondary">
        <div className="text-left md:text-center">
          <h2 className="text-4xl md:text-5xl font-medium max-w-[900px] mx-auto leading-[120%] mb-8 md:mb-[40px] !text-white">
            Why choose global mediation?
          </h2>
          <p className=" text-base md:text-lg leading-[150%] mb-[56px] md:mb-[78px]">
            We’ve worked with families across the UK for more than 25 years, supporting them through some of life’s most complex and
            emotionally charged moments . Whether you’re dealing with parenting, financial, or communication breakdowns, our mediators offer
            calm, expert support without judgement.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
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
            <p className="mb-6 font-semibold text-lg md:text-2xl">Why families trust us:</p>
            <ul className="space-y-6 text-base md:text-[20px]">
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className=" font-normal leading-[140%]">Accredited family mediation specialists</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="font-normal leading-[140%]">Inclusive, accessible and trauma-informed</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className=" font-normal leading-[140%]">Trusted by individuals, legal teams and local authorities</p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className=" font-normal leading-[140%]">Proven to reduce conflict and improve outcomes for families</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MediationCalculation />
      <FeedbackCarousel title={'Testimonials from families'} subTitle={null} fullWidth={true} />
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Take the First Step'}
          subTitle={
            'Whether you’re in the early stages of separation or struggling to co-parent, we’re here to help you take the next step with clarity and care.'
          }
          Button1Link={'/contact-us'}
          Button1Text={'Book a Family Mediation Appointment'}
          Button2Text={'Speak to Our Family Mediation Team'}
          Button2Link={'/contact-us'}
        />
      </div>
      <FAQ title={'FAQs about family mediation'} buttonText={'Ask us a question'} buttonLink={'/contact-us'} faqData={faqData} />
    </div>
  );
};

export default page;
