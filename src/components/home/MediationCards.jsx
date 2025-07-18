'use client';
import React, { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import MediationCard from './MediationCard';
import VoluntaryIcon from './Mediation Icon/VoluntaryIcon';
import Confidential from './Mediation Icon/Confidential';
import Neutral from './Mediation Icon/Neutral';
import Efficient from './Mediation Icon/Efficient';

const MediationCards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
    disabled: isMobile,
  });

  useEffect(() => {
    if (!isMobile) {
      const handleScrollProgress = () => {
        const progress = scrollYProgress.get();
        if (progress < 0.25) setActiveCardIndex(0);
        else if (progress < 0.5) setActiveCardIndex(1);
        else if (progress < 0.75) setActiveCardIndex(2);
        else setActiveCardIndex(3);
      };

      const unsubscribe = scrollYProgress.onChange(handleScrollProgress);
      handleScrollProgress();

      return () => {
        unsubscribe();
      };
    }
  }, [scrollYProgress, isMobile]);

  const mediationCards = [
    {
      title: 'Voluntary',
      subTitle: 'Mediation is always by mutual agreement, empowering everyone involved to shape their own outcome.',
      icon: props => <VoluntaryIcon {...props} />,
    },
    {
      title: 'Confidential',
      subTitle: 'Conversations are private and protected, creating space for open dialogue and trust.',
      icon: props => <Confidential {...props} />,
    },
    {
      title: 'Neutral',
      subTitle: 'Our mediators stay impartial, ensuring fairness and respect for all parties.',
      icon: props => <Neutral {...props} />,
    },
    {
      title: 'Efficient',
      subTitle: 'Mediation helps you resolve disputes faster and more affordably than litigation.',
      icon: props => <Efficient {...props} />,
    },
  ];

  if (isMobile) {
    return (
      <section className="px-5 pb-10 lg:px-16">
        <SectionHeading
          title={'Mediation that works for you'}
          subTitle={
            'No matter the conflict, resolution starts with listening. At Global Mediation, we believe that  understanding, reframing and altering perspectives can shift even the most challenging conversations. We do not take sides, we create safe, supportive spaces where every voice is heard and respected. Through open dialogue and impartial guidance, we help people and organisations work toward outcomes that benefit everyone involved.'
          }
          fullWidth={true}
        />
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {mediationCards.map((card, index) => (
            <MediationCard key={index} title={card.title} subTitle={card.subTitle} icon={card?.icon} active={false} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={sectionRef} className="relative lg:max-w-[1318px] mx-auto pb-16 h-[300vh]">
      <div className="sticky -top-[10%]  flex items-center justify-center">
        <div className="w-full px-5 lg:px-16">
          <SectionHeading
            title={'Mediation that works for you'}
            subTitle={
              'No matter the conflict, resolution starts with listening. At Global Mediation, we believe that understanding and perspective can shift even the most challenging conversations. We do not take sides, we create safe, supportive spaces where every voice is heard and respected. Through open dialogue and impartial guidance, we help people find common ground and work toward outcomes that benefit everyone involved.'
            }
            className="mb-8"
          />
          <div className="grid grid-cols-1 mt-[80px] md:grid-cols-4 gap-4">
            {mediationCards.map((card, index) => (
              // <MediationCard key={index} title={card.title} subTitle={card.subTitle} icon={card?.icon} active={activeCardIndex === index} />
              <div
                key={index}
                className={`
        px-[25px] 
        col-span-4 md:col-span-2 lg:col-span-1 
        group cursor-pointer 
        pb-12 pt-[40px] md:pt-16 
        border rounded-3xl
        transition-all duration-300 ease-in-out
        ${activeCardIndex === index ? 'border-primary bg-primary text-white  ' : 'border-gray-300 bg-white text-gray-700 '}
      `}
              >
                <div className="text-secondary">
                  {card?.icon({
                    fill: ` ${activeCardIndex === index ? '#fff' : '#43006A'}`,
                    className: 'h-[60px]  w-[60px] ',
                  })}
                </div>
                <h3
                  className={`
          font-semibold text-2xl my-16
          ${activeCardIndex === index ? 'text-white' : 'text-gray-700'}
        `}
                >
                  {card?.title}
                </h3>
                <p
                  className={`
          font-arial text-base md:text-lg font-normal
          ${activeCardIndex === index ? 'text-white/80' : 'text-black'}
        `}
                >
                  {card?.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediationCards;
