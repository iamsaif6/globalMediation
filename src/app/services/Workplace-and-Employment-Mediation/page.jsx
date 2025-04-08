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
        Button2Link="/about-us"
        cover={null}
      />
      <Introduction
        title={'of Workplace Mediation'}
        image={service1}
        subtitle={
          'Workplace disputes can impact morale, slow productivity, and create a negative atmosphere for teams and individuals.Global Mediation provides a supportive and impartial route to resolving these challenges, helping people move forward with confidence.Our workplace mediators work sensitively with everyone involved, creating a safe space for honest conversation, rebuilding communication, and reaching outcomes that benefit employees, teams, and organisations'
        }
        items={[
          'Prevent costly disruptions, formal grievances, or legal action',
          'Improve morale and workplace satisfaction',
          'Strengthen collaboration and internal communication',
        ]}
      />
      <Tabs
        title={'Comprehensive Workplace & Employment Mediation Services'}
        subtitle={'Our trained mediators support organisations across a wide range of workplace challenges, including:'}
        services={[
          'Harassment and bullying complaints',
          'Team conflict and collaboration issues',
          'Grievance and disciplinary mediation',
          'Organisational restructuring disputes',
          'Redundancy-related concerns',
        ]}
      />

      <Tabs
        title={'Workplace and Employment Disputes'}
        subtitle={
          'Conflicts at work can arise for many reasons — between colleagues, teams, or management. Left unresolved, they can lead to formal complaints, lost productivity, and long-term relationship breakdowns.Workplace mediation offers a way to address those issues quickly and constructively.It provides a neutral, confidential setting for all parties to feel heard, explore options, and agree on a way forward.'
        }
        services={[
          'Enhances workplace morale and engagement',
          'Encourages early resolution before escalation',
          'Helps foster respectful and inclusive workplace culture',
        ]}
      />
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
          Button1Link={'#'}
          Button1Text={'Contact us today'}
        />
      </div>
    </div>
  );
};

export default page;
