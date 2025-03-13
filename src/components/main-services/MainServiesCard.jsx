import React from 'react';
import service1 from '/public/service1.jpg';
import service2 from '/public/service2.jpg';
import service3 from '/public/service3.jpg';
import service4 from '/public/service4.jpg';
import Image from 'next/image';
import Button from '../shared/Button';

const services = [
  {
    title: 'Workplace and Employment Mediation',
    service: [
      'Workplace and Employment Disputes',
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
    service: [
      'Business Disputes',
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
    title: 'SEND (Special Educational Needs and Disability) Mediation',
    service: [
      'Educational Health and Care Plan (EHCP) Disputes',
      'Resource Allocation Conflicts',
      'School Placement Disputes',
      'Grievance and Disciplinary Mediation',
      'Communication Breakdowns Between Parents and Schools',
      'SEND Appeals Mediation',
    ],
    image: service3,
  },
  {
    title: 'Community Mediation',
    service: [
      'Business Neighbourhood Disputes (Noise, Boundaries, etc.)',
      'Local Government Mediation',
      'Nonprofit and Charity Group Disputes',
      'Tenant-Association Conflicts',
      'Community Group Disagreements',
    ],
    image: service4,
  },
  {
    title: 'Family Mediation',
    service: [
      'Divorce and Separation Mediation',
      'Child Custody and Parenting Agreements',
      'Financial Settlement Mediation for Divorcing Couples',
      'Grievance and Disciplinary Mediation',
      'Inheritance and Probate Disputes',
      'Elderly Care and Family Estate Planning Mediation',
    ],
    image: service1,
  },
  {
    title: 'Civil and Legal Dispute Mediation',
    service: [
      'Property Disputes (Landlord-Tenant, Boundary Issues)',
      'Small Claims Disputes',
      'Consumer Rights Disputes',
      'Personal Injury Mediation',
      'Professional Negligence Cases',
      'Other Civil Litigation Avoidance Mediation',
    ],
    image: service2,
  },
];

const MainServiesCard = () => {
  return (
    <div className="mb-[40px] ">
      {services.map((item, index) => (
        <div key={item + index} className={`${index % 2 != 0 ? 'bg-[#F3F1FF]' : 'bg-[#F9F8FF]'} py-16 md:py-[80px] px-5 md:px-[60px]`}>
          <h1 className="max-w-[600px] font-medium text-4xl md:text-5xl leading-[120%] mb-[42px] md:mb-[80px]">{item.title}</h1>
          <div className="grid grid-cols-2 items-center  gap-8 md:gap-[100px]">
            <div className={`${index % 2 != 0 ? 'order-2' : ''} col-span-2 md:col-span-1`}>
              {item.service.map(li => (
                <div
                  key={li}
                  className={`${
                    index % 2 != 0 ? 'hover:bg-[#fff]' : 'hover:bg-[#F3F1FF]'
                  } border-b-[0.5px] group flex gap-3 items-center justify-between border-[#DAD3FF]  text-lg font-normal p-3 md:p-6`}
                >
                  <div className="flex  items-center gap-[26px]">
                    <span className="w-[10px] flex-shrink-0 h-[10px] bg-primary rounded-full inline-block"></span>
                    <p>{li}</p>
                  </div>
                  <span className="w-8 flex-shrink-0 group-hover:opacity-100 opacity-0 duration-300  h-8 rounded-full bg-secondary  items-center justify-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8.00033 2.66675L7.06033 3.60675L10.7803 7.33342H2.66699V8.66675H10.7803L7.06033 12.3934L8.00033 13.3334L13.3337 8.00008L8.00033 2.66675Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              ))}
              <div className="mt-8">
                <Button padding="xlarge" href="#" title={'Learn more'} />
              </div>
            </div>
            <div className="col-span-2 order-1 md:col-span-1 overflow-hidden max-h-[503px] rounded-[40px] relative">
              <div
                className={`${
                  index % 2 != 0 ? 'from-[rgba(0, 164, 159, 0.1)] to-[#00a49ed0]' : 'from-[rgba(67,0,106,0.1)] to-[#43006aa3]'
                } absolute inset-0 bg-gradient-to-b  z-10`}
              ></div>
              {item?.image && <Image className="object-cover w-full h-full relative z-0" alt={item.title} src={item?.image} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainServiesCard;
