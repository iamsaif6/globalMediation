import Image from 'next/image';
import React from 'react';
import service2 from '/public/service2.jpg';
import service3 from '/public/explore.png';
import service4 from '/public/Frame 1707479811.png';
import Link from 'next/link';

const exlopreItem = [
  {
    title: 'Foundation Course in Mediation',
    description:
      'A six-day course designed to equip you with the knowledge and skills to qualify as an accredited mediator.This programme blends theory with live practice, from the core stages of mediation to professional ethics and resolution strategies.',
    key: [
      'Practical exercises, role plays and guided discussion',
      'Certification to apply for Civil Mediation Council membership',
      'Ideal for professionals entering the field of mediation',
    ],
    cover: service2,
    buttonText: 'Enrol in the Foundation Course Today',
    buttonLink: '#',
  },
  {
    title: 'SEND Mediation Training Course',
    description:
      'An advanced course for accredited mediators looking to specialise in Special Educational Needs and Disability (SEND).You’ll explore legal frameworks, local authority processes and SEND-specific mediation approaches.',
    key: [
      'Deep understanding of SEND law and systems',
      'Specialist certification as a SEND mediator',
      'Approved by the Civil Mediation Council and the College of Mediators',
    ],
    cover: service3,
    buttonText: 'Specialise in SEND Mediation.',
    buttonLink: '#',
  },
  {
    title: 'SEND Mediation: Professional Practice Day',
    description:
      'Designed for practising SEND mediators who want to grow their skills.Engage in live role plays, structured feedback and peer discussion — all led by experienced trainers.',
    key: [
      'Real-world scenarios and supervised practise',
      'Personalised coaching and feedback',
      'Advanced development for experienced mediators',
    ],
    cover: service4,
    buttonText: 'Advance Your SEND Skills Today',
    buttonLink: '#',
  },
];

const ExploreItem = () => {
  return (
    <div className="mt-[54px] space-y-8 md:space-y-[80px]">
      {exlopreItem.map((item, idx) => (
        <div key={idx} className=" grid grid-cols-2 gap-[80px]">
          <div className="col-span-2 lg:col-span-1">
            <h1 className="font-semibold text-[24px] mb-[37px]  md:text-5xl leading-[120%]">{idx + 1 + '. ' + item.title}</h1>
            <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
              <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
              <Image
                width={900}
                height={900}
                className="object-cover w-full h-full relative z-0"
                alt={'Experienced Leader In Mediation'}
                src={item.cover.src}
              />
            </div>
            <p className="text-[#667085] text-base md:text-lg leading-[150%]">{item.description}</p>

            <div>
              <h3 className="md:text-2xl text-lg font-medium text-secondary my-6 ">Key benefits:</h3>
              <ul className="text-[#667085] text-base md:text-lg">
                <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                  <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                  <span>Accredited by the Civil Mediation Council and the College of Mediators.</span>
                </li>
                <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                  <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                  <span>Hands-on learning through role plays, exercises, and reflective sessions.</span>
                </li>
                <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
                  <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                  <span>Comprehensive support, including individual tutorials and coaching.</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  className={`bg-primary w-full md:w-auto border border-primary font-normal text-base md:text-lg text-[#FCFCFD] px-8 py-3 rounded-[40px]`}
                >
                  <Link className="w-full" href={item.buttonLink}>
                    {item.buttonText}
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="relative  hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
            <div className={`from-[rgba(0, 164, 159, 0.15)] to-[#00a49e8b] absolute inset-0 bg-gradient-to-b  z-10`}></div>
            <Image width={900} height={900} className="object-cover w-full h-full relative z-0" alt={item.title} src={item.cover.src} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreItem;
