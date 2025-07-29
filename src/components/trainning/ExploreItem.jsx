import Image from 'next/image';
import React from 'react';
import service2 from '/public/training-2.jpg';
import service3 from '/public/training-3.jpg';
import service4 from '/public/priscilla-du-preez-XkKCui44iM0-unsplash.jpg';
import Link from 'next/link';

const exlopreItem = [
  {
    title: 'Foundation course in mediation',
    description:
      'A six-day course designed to equip you with the knowledge and skills to qualify as an accredited mediator. This programme blends theory with live practice, from the core stages of mediation to professional ethics and resolution strategies.',
    key: [
      'Practical exercises, role plays and guided discussion',
      'Certification to apply for civil mediation council membership',
      'Ideal for professionals entering the field of mediation',
    ],
    cover: service2,
    buttonText: 'Enrol in the foundation course today',
    buttonLink: '/contact',
  },
  {
    title: 'SEND mediation training course',
    description:
      'An advanced course for accredited mediators looking to specialise in special educational needs and disability (SEND). You’ll explore legal frameworks, local authority processes and SEND-specific mediation approaches.',
    key: [
      'Deep understanding of SEND law and systems',
      'Specialist certification as a SEND mediator',
      'Approved by the civil mediation council and the college of mediators',
    ],
    cover: service3,
    buttonText: 'Specialise in SEND mediation',
    buttonLink: '/contact',
  },
  {
    title: 'SEND mediation: Professional practice day',
    description:
      'Designed for practising SEND mediators who want to grow their skills. Engage in live role plays, structured feedback and peer discussion — all led by experienced trainers.',
    key: [
      'Real-world scenarios and supervised practise',
      'Personalised coaching and feedback',
      'Advanced development for experienced mediators',
    ],
    cover: service4,
    buttonText: 'Advance your SEND skills today',
    buttonLink: '/contact',
  },
];

const ExploreItem = () => {
  return (
    <div className="mt-[54px] space-y-8 md:space-y-[80px]">
      {exlopreItem.map((item, idx) => (
        <>
          <div key={idx} className=" grid items-center grid-cols-2 gap-[80px]">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-[24px] mb-[30px]  md:text-[32px] leading-[120%]">{idx + 1 + '. ' + item.title}</h3>
              <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
                <Image
                  width={900}
                  height={900}
                  className="object-cover w-full h-full relative z-0"
                  alt={`Experienced Leader In Mediation ${idx}`}
                  src={item.cover.src}
                />
              </div>
              <p className=" text-base mb-5 md:text-lg leading-[150%]">{item.description}</p>

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
              </div>
            </div>
            <div className="relative h-[303px] lg:h-[403px]  hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <Image width={900} height={900} className="object-cover w-full h-full relative z-0" alt={item.title} src={item.cover.src} />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              className={`bg-primary  border border-primary font-semibold text-base md:text-lg text-[#FCFCFD] px-8 py-3 rounded-[40px]`}
            >
              <Link title={item.buttonText} className="w-full" href={item.buttonLink}>
                {item.buttonText}
              </Link>
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default ExploreItem;
