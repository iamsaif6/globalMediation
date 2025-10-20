import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const service2 = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/training-2.jpg';
const service3 = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/training-3.jpg';
const service4 = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/priscilla-du-preez-XkKCui44iM0-unsplash.jpg';

const exlopreItem = [
  {
    title: 'Foundation Course in Mediation',
    description:
      'A six-day course designed to equip you with the knowledge and skills to qualify as an accredited mediator. This programme blends theory with live practice, from the core stages of mediation to professional ethics and resolution strategies.',
    key: [
      'Hands-On Learning Through Role Plays, Exercises, and Reflective Sessions',
      'Comprehensive Support, Including Individual Tutorials and Coaching',
    ],
    cover: service2,
    buttonText: 'Enrol in the Foundation Course Today',
    buttonLink: '/contact',
  },
  {
    title: 'SEND Mediation Training Course',
    description:
      'An advanced course for accredited mediators looking to specialise in special educational needs and disability (SEND). You’ll explore legal frameworks, local authority processes and SEND-specific mediation approaches.',
    key: [
      'Hands-On Learning Through Role Plays, Exercises, and Reflective Sessions',
      'Comprehensive Support, Including Individual Tutorials and Coaching',
    ],
    cover: service3,
    buttonText: 'Specialise in SEND Mediation',
    buttonLink: '/contact',
  },
  {
    title: 'SEND Mediation: Professional Practice Days',
    description:
      'Designed for practising SEND mediators who want to grow their skills. Engage in live role plays, structured feedback and peer discussion — all led by experienced trainers.',
    key: [
      'Hands-On Learning Through Role Plays, Exercises, and Reflective Sessions',
      'Comprehensive Support, Including Individual Tutorials and Coaching',
    ],
    cover: service4,
    buttonText: 'Advance Your SEND Skills Today',
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
                  src={item.cover}
                />
              </div>
              <p className=" text-base mb-5 md:text-lg leading-[150%]">{item.description}</p>

              <div>
                <h3 className="md:text-2xl text-lg font-medium text-secondary my-6 ">Key Benefits:</h3>
                <ul className="text-[#667085] text-base md:text-lg">
                  {item.key.map((point, index) => (
                    <li
                      key={index}
                      className={`flex items-center py-6 pl-[7px] gap-[26px] ${
                        index === 0
                          ? 'border-b-[0.5px] border-[#DAD3FF]'
                          : index === item.key.length - 1
                          ? ''
                          : 'border-b-[0.5px] border-[#DAD3FF]'
                      }`}
                    >
                      <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-[303px] lg:h-[403px]  hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <Image width={900} height={900} className="object-cover w-full h-full relative z-0" alt={item.title} src={item.cover} />
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
