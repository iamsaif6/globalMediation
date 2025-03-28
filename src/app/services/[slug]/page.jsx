import Header from '@/components/shared/Header';
import React from 'react';
import serviceHeader from '/public/service_header.png';
import Introduction from '@/components/service/Introduction';
import Tabs from '@/components/service/Tabs';
import WhyChoose from '@/components/service/WhyChoose';
import MediationCalculation from '@/components/home/MediationCalculation';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import Map from '@/components/service/Map';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';
import service1 from '/public/service1.jpg';
import service2 from '/public/service2.jpg';
import service3 from '/public/service3.jpg';
import service4 from '/public/service4.jpg';
import service5 from '/public/Family Mediation.png';

const data = [
  {
    title: 'Workplace and Employment Mediation',
    slug: 'Workplace-and-Employment-Mediation',
    subtitle:
      'Workplace disputes can affect morale, productivity and wellbeing — for teams and individuals alike. Our mediators support both employees and employers to resolve conflict collaboratively and confidentially, creating space for honest conversations and practical solutions.',
    service: [
      'Harassment and Bullying Complaints',
      'Team Conflicts and Collaboration Issues',
      'Grievance and Disciplinary Mediation',
      'Organisational Restructuring Disputes',
      'Redundancy Mediation',
    ],
    image: service1,
  },
  {
    title: 'Business and Commercial Mediation',
    slug: 'Business-and-Commercial-Mediation',
    subtitle:
      'Disputes in business can damage relationships, stall progress and increase costs. Our mediation service supports companies and professionals to resolve commercial disagreements quickly and confidentially, protecting reputations and preserving working relationships wherever possible.',
    service: [
      'Contract Dispute',
      'Shareholder and Partnership Conflicts',
      'Supplier and Client Disputes',
      'Intellectual Property Disputes',
      'Professional Negligence Mediation',
      'Construction Disputes',
      'Tax and Accounting Disputes',
    ],
    image: service2,
  },
  {
    title: 'SEND Mediation',
    slug: 'send-mediation',
    subtitle:
      'When disagreements arise around special educational needs or disabilities, emotions can run high. Our SEND mediation service supports families, schools and local authorities to work together in a calm, constructive way. We create space for clear communication, mutual understanding and better outcomes for the children and young people at the heart of every decision.',
    service: [
      'EHCP Needs Assessments',
      'EHCP Content Disputes',
      'School Placement Disagreements',
      'Tribunal Appeals',
      'Mediation Advice Certificate Appointments',
      'Annual Review Disputes',
      'Preparing for Adulthood Discussions',
    ],
    image: service3,
  },
  {
    title: 'Community and Family Mediation',
    slug: 'Community-Family-Mediation',
    subtitle:
      'Conflict in personal or community relationships can feel deeply personal and emotionally draining. Our mediators help individuals, neighbours and families navigate difficult conversations with empathy, impartiality and care. We provide a safe, neutral space to rebuild trust, improve communication and move forward with dignity and mutual understanding.',
    service: [
      'Neighbour Disputes',
      'Intergenerational Family Conflict',
      'Housing and Tenancy Issues',
      'Co-parenting or Extended Family Communication Challenges',
      'Community Group Tensions',
      'Relationship Breakdown Mediation (non-legal)',
    ],
    image: service4,
  },
  {
    title: 'CIVIL AND LEGAL DISPUTE MEDIATION',
    slug: 'Civil-and-Legal-Dispute-Mediation',
    subtitle:
      'Mediation offers a calm, cost-effective alternative to court. We help individuals, professionals and organisations resolve a wide range of civil and legal disputes quickly and fairly. Our impartial mediators guide the process with clarity and respect, helping people reach balanced outcomes without the delays, cost or stress of litigation.',
    service: [
      'Boundary and Neighbour Disputes',
      'Consumer Complaints',
      'Landlord and Tenant Issues',
      'Wills and Probate Disputes',
      'Insurance and Financial Conflicts',
      'Small Claims',
      'Professional Negligence',
      'Contract Disputes',
    ],
    image: service5,
  },
];

const faqData = [
  {
    key: 1,
    question: 'How long does workplace mediation take?',
    answer:
      'The potential for success is high. Mediation provides an opportunity for cases to be looked at in detail and considered with greater care than usual. Face to face meetings provide the opportunity to clarify positions and understand other points of view; to explore creative and imaginative solutions that may not have been considered previously. It gives parties the opportunity to rebuild trust and re-establish a working relationship.',
  },
  {
    key: 2,
    question: 'Is workplace mediation legally binding?',
    answer:
      'The potential for success is high. Mediation provides an opportunity for cases to be looked at in detail and considered with greater care than usual. Face to face meetings provide the opportunity to clarify positions and understand other points of view; to explore creative and imaginative solutions that may not have been considered previously. It gives parties the opportunity to rebuild trust and re-establish a working relationship.',
  },
  {
    key: 3,
    question: 'What types of conflicts are best suited for workplace mediation?',
    answer:
      'The potential for success is high. Mediation provides an opportunity for cases to be looked at in detail and considered with greater care than usual. Face to face meetings provide the opportunity to clarify positions and understand other points of view; to explore creative and imaginative solutions that may not have been considered previously. It gives parties the opportunity to rebuild trust and re-establish a working relationship.',
  },
];

const Service = ({ params }) => {
  const slug = params.slug;
  const service = data.find(item => item.slug == slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <Header
        title={service.title}
        subTitle={service.subtitle}
        Button1Text={'Book a mediation session'}
        Button1Link="#"
        Button2Text={'Learn About Mediation Training'}
        Button2Link="#"
        cover={service.image}
      />
      <Introduction title={service.title} subtitle={service.subtitle} />
      <Tabs title={service.title} subtitle={service.subtitle} services={service.service} />
      <WhyChoose />
      <MediationCalculation />
      <FeedbackCarousel
        title={'What Our Clients Say About Workplace and Employment Mediation?'}
        subTitle={'Real testimonials from clients who benefited from this service.'}
      />
      <Map />
      <FAQ />
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

export default Service;
