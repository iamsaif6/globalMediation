import React from 'react';
import service1 from '/public/main-service-block-2.jpg';
import service2 from '/public/workspace.jpeg';
import service3 from '/public/send.jpg';
import service4 from '/public/Main Services Community.jpg';
import service6 from '/public/civil.jpg';
import Image from 'next/image';
import Button from '../shared/Button';
import Link from 'next/link';

const services = [
  {
    title: 'Workplace and Employment Mediation',
    subtitle:
      'Workplace disputes can affect morale, productivity and wellbeing — for teams and individuals alike. Our mediators support both employees and employers to resolve conflict collaboratively and confidentially, creating space for honest conversations and practical solutions.',
    service: [
      'Harassment and Bullying Complaints',
      'Team Conflicts and Collaboration Issues',
      'Grievance and Disciplinary Mediation',
      'Organisational Restructuring Disputes',
      'Redundancy Mediation',
    ],
    image: service2,
    link: '/services/Workplace-and-Employment-Mediation',
  },
  {
    title: 'Business and Commercial Mediation',
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
    image: service1,
    link: '/services/Business-and-Commercial-Mediation',
  },
  {
    title: 'SEND Mediation',
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
    link: '/services/send-mediation',
  },
  {
    title: 'Community and Family Mediation',
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
    link: '/services/Community-Mediation',
  },
  {
    title: 'CIVIL AND LEGAL DISPUTE MEDIATION',
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
    image: service6,
    link: '/services/Civil-and-Legal-Dispute-Mediation',
  },
];

const MainServiesCard = () => {
  return (
    <div className="mb-[40px] ">
      {services.map((item, index) => (
        <div key={item + index} className={`${index % 2 != 0 ? 'bg-[#F3F1FF]' : 'bg-[#F9F8FF]'} py-16 md:py-[80px] px-5 md:px-[60px]`}>
          <h2 className="w-full mb-8 font-medium text-4xl md:text-[32px] leading-[120%] ">{item.title}</h2>
          <p className="mb-[32px] text-black text-base md:text-lg md:mb-[60px]">{item.subtitle}</p>
          <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
            <div className={`${index % 2 != 0 ? 'order-2' : ''} col-span-2 lg:col-span-1`}>
              {item.service.map(li => (
                <div
                  key={li}
                  className={`${
                    index % 2 != 0 ? 'hover:bg-[#fff]' : 'hover:bg-[#F3F1FF]'
                  } border-b-[0.5px] group flex gap-3 text-gray-500 items-center justify-between border-[#DAD3FF]  text-lg font-normal p-3 md:p-6`}
                >
                  <div className="flex  items-center gap-[26px]">
                    <span className="w-[10px] flex-shrink-0 h-[10px] bg-primary rounded-full inline-block"></span>
                    <p>{li}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 order-1 lg:col-span-1 overflow-hidden   h-[353px] lg:h-[403px] rounded-[40px] relative">
              {item?.image && <Image className="object-cover w-full h-full relative z-0" alt={item.title} src={item?.image} />}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
            <div className={`${index % 2 != 0 ? 'order-2' : ''} col-span-2 lg:col-span-1`}>
              <div className="flex justify-center md:block mt-10">
                <button
                  className={`bg-primary inline-block border-primary font-semibold text-lg text-[#FCFCFD] px-[68px] lg:px-[42px]  py-3 rounded-3xl lg:rounded-[40px]`}
                >
                  <Link className="w-full" href={item.link}>
                    Learn more
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-span-2 order-1 lg:col-span-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainServiesCard;
