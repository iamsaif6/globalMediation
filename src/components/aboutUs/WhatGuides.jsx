import React from 'react';
import { BicepsFlexed, Gem, HeartHandshake, IdCard, Puzzle, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: IdCard,
    title: 'Quality',
    description: 'We listen and learn and go the extra mile to provide outstanding service to our clients.',
  },
  {
    icon: ShieldCheck,
    title: 'Impact',
    description: 'We make the world a better place by resolving harmful conflict and improving relationships.',
  },
  {
    icon: HeartHandshake,
    title: 'Inclusion',
    description: 'We celebrate difference and encourage inclusivity.',
  },
  {
    icon: Puzzle,
    title: 'Teamwork',
    description: 'We create strong healthy relationships and work together to encourage each other’s growth.',
  },
  {
    icon: Gem,
    title: 'Integrity',
    description: 'We do what we say we will do and act ethically and honestly.',
  },
];

const WhatGuides = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px]">
      <div className="max-w-[850px] mx-auto text-left md:text-center">
        <h2 className="font-medium leading-[120%] tracking-[-0.04em] text-4xl md:text-[40px] lg:text-5xl mb-5 md:mb-6">
          What Guides Our Work
        </h2>
        <p className="text-black text-base md:text-lg font-normal">
          Founded by barrister and mediator Adam Gersch, Global Mediation began with a simple idea: that people deserve better ways to
          resolve conflict. Over two decades later, we have grown into a national team working across sectors, from education to healthcare,
          workplaces to families, still driven by that same purpose. Everything we do is shaped by the values that define our approach, and
          the way we support people through conflict.
        </p>
      </div>

      <div className="mt-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
        {values.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="p-6 bg-[#F3F1FF] rounded-3xl flex flex-col hover:shadow-md transition-shadow h-full">
            <div className="flex flex-col flex-1">
              {/* Icon */}
              <div className="mt-3">
                <Icon className="text-secondary" strokeWidth={1.2} size={45} />
              </div>

              {/* Title */}
              <p className="font-medium text-secondary text-2xl my-[30px] lg:my-[30px]">{title}</p>

              {/* Description */}
              <p className="text-lg font-normal">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatGuides;
