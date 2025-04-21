import Header from '@/components/shared/Header';
import React from 'react';
import Button from '@/components/shared/Button';
import Image from 'next/image';
import banner from '/public/workspace-hero.jpg';
import WhyChoose from '@/components/service/WhyChoose';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import Map from '@/components/service/Map';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';
import service1 from '/public/workspace-service.jpg';
import service2 from '/public/mediation-service-2.jpg';
import service3 from '/public/workspace-intro.jpg';
import Link from 'next/link';

const faqData = [
  {
    key: 1,
    question: 'How long does workplace mediation take?',
    answer: 'Typically a one-day process, depending on the complexity of the dispute. Preparation and follow-up are included.',
  },
  {
    key: 2,
    question: 'Is workplace mediation legally binding?',
    answer: 'Agreements are not legally binding but can be formalised internally. The focus is on practical, mutual outcomes.',
  },
  {
    key: 3,
    question: 'What types of conflicts are best suited?',
    answer: 'Interpersonal disputes, communication breakdowns, or early-stage grievances are most suitable for mediation.',
  },
];

const page = () => {
  return (
    <div>
      <Header
        title={'Workplace and Employment Mediation'}
        subTitle={
          'Specialised mediation services designed to resolve workplace conflicts and foster collaboration, trust, and a more positive work environment.'
        }
        Button1Text={'Book a mediation session'}
        Button1Link="/contact-us"
        Button2Text={'Learn About Mediation Training'}
        Button2Link="/training"
        cover={banner}
      />

      <section>
        <div className=" py-16 px-5 md:px-16 md:py-[80px] ">
          <div className="text-center mx-auto mb-[60px] lg:mb-[100px]">
            <h1 className="font-medium max-w-[900px]  mx-auto text-4xl md:text-5xl leading-[120%]">Workplace and Employment Mediation</h1>
            <p className="text-black text-base md:text-lg leading-[150%] my-6">
              Workplace disputes can impact morale, slow productivity, and create a negative atmosphere for teams and individuals.
              {/* <br className="mb-3" /> */}
              Global Mediation provides a supportive and impartial route to resolving these challenges, helping people move forward with
              confidence.
              <br className="mb-3" />
              Our workplace mediators work sensitively with everyone involved, creating a safe space for honest conversation, rebuilding
              communication, and reaching outcomes that benefit employees, teams, and organisations.
            </p>
          </div>
          <div className=" items-center grid grid-cols-2 gap-[80px]">
            <div className="relative   lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
            </div>
            <div className="col-span-2 flex justify-center flex-col lg:col-span-1">
              <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                <Image
                  className="object-cover object-bottom  w-full h-full relative z-0"
                  alt={'Experienced Leader In Mediation'}
                  src={service1}
                />
              </div>

              <div>
                <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
                <ul className="text-[#667085] text-lg">
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Prevent costly disruptions, formal grievances, or legal action</span>
                  </li>

                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Improve morale and workplace satisfaction</span>
                  </li>
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Strengthen collaboration and internal communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-white">
        <div className=" py-16 px-5 md:px-16 md:py-[80px] ">
          <div className="text-center max-w-[900px] mx-auto mb-[60px] lg:mb-[100px]">
            <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Comprehensive Workplace & Employment Mediation Services</h1>
            <p className="  text-base md:text-lg leading-[150%] my-6">
              Our trained mediators support organisations across a wide range of workplace challenges.
            </p>
          </div>
          <div className=" items-center grid grid-cols-2 gap-[80px]">
            <div className="col-span-2 flex justify-center flex-col lg:col-span-1">
              <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                <Image
                  className="object-cover object-bottom  w-full h-full relative z-0"
                  alt={'Experienced Leader In Mediation'}
                  src={service2}
                />
              </div>

              <div>
                <ul className=" text-lg">
                  <li className="flex hover:bg-white hover:text-black items-center py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Harassment and bullying complaints</span>
                  </li>

                  <li className="flex hover:bg-white hover:text-black items-center py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Team conflict and collaboration issues</span>
                  </li>
                  <li className="flex hover:bg-white hover:text-black items-center py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Grievance and disciplinary mediation</span>
                  </li>

                  <li className="flex hover:bg-white hover:text-black items-center py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Organisational restructuring disputes</span>
                  </li>

                  <li className="flex hover:bg-white hover:text-black items-center py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Redundancy-related concerns</span>
                  </li>
                </ul>
                <button className=" bg-white mt-10 w-full md:w-auto font-normal text-lg text-secondary px-12 py-3 rounded-[40px] ">
                  <Link className="w-full  " href="/contact-us">
                    Book Workplace Mediation
                  </Link>
                </button>
              </div>
            </div>
            <div className="relative   lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service2} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-16 px-5 md:px-16 md:py-[80px] ">
          <div className="text-center  mx-auto mb-[60px] lg:mb-[100px]">
            <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Workplace and Employment Disputes</h1>
            <p className="text-black  text-base md:text-lg leading-[150%] my-6">
              Conflicts at work can arise for many reasons — between colleagues, teams, or management. Left unresolved, they can lead to
              formal complaints, lost productivity, and long-term relationship breakdowns.Workplace mediation offers a way to address those
              issues quickly and constructively.
              <br /> <br />
              It provides a neutral, confidential setting for all parties to feel heard, explore options, and agree on a way forward.
            </p>
          </div>
          <div className=" items-center grid grid-cols-2 gap-[80px]">
            <div className="col-span-2 flex justify-center flex-col lg:col-span-1">
              <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                <Image
                  className="object-cover object-bottom  w-full h-full relative z-0"
                  alt={'Experienced Leader In Mediation'}
                  src={service3}
                />
              </div>

              <div>
                <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
                <ul className="text-[#667085] text-lg">
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Enhances workplace morale and engagement</span>
                  </li>

                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Encourages early resolution before escalation</span>
                  </li>
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Helps foster respectful and inclusive workplace culture</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative   lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service3} />
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <MediationCalculation />
      <FeedbackCarousel
        title={'What Our Clients Say About Workplace and Employment Mediation?'}
        subTitle={'Real testimonials from clients who benefited from this service.'}
      />
      <Map />
      <FAQ title={'FAQs About Workplace Mediation'} buttonText={'Contact Us'} buttonLink={'/contat-us'} faqData={faqData} />
      <div className="bg-[#F9F8FF]">
        <CTA
          title={'Learn More About Global Mediation'}
          subTitle={'For more information about our services, team, training programs, or career opportunities, get in touch with us:'}
          Button1Link={'/contact-us'}
          Button1Text={'Contact us today'}
        />
      </div>
    </div>
  );
};

export default page;
