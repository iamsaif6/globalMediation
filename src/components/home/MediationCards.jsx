'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import MediationCard from './MediationCard';
import { VoluntaryIcon } from './Mediation Icon/Voluntary';

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
      icon: VoluntaryIcon,
    },
    {
      title: 'Confidential',
      subTitle: 'Conversations are private and protected, creating space for open dialogue and trust.',
    },
    {
      title: 'Neutral',
      subTitle: 'Our mediators stay impartial, ensuring fairness and respect for all parties.',
    },
    {
      title: 'Efficient',
      subTitle: 'Mediation helps you resolve disputes faster and more affordably than litigation.',
    },
  ];

  if (isMobile) {
    return (
      <section className="px-5 py-10 lg:px-16">
        <SectionHeading
          title={'Mediation That Works For You'}
          subTitle={
            'No matter the conflict, resolution starts with listening. At Global Mediation, we believe that understanding and perspective can shift even the most challenging conversations. We do not take sides, we create safe, supportive spaces where every voice is heard and respected. Through open dialogue and impartial guidance, we help people find common ground and work toward outcomes that benefit everyone involved.'
          }
        />
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {mediationCards.map((card, index) => (
            <MediationCard key={index} title={card.title} subTitle={card.subTitle} icon={card.icon} active={false} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={sectionRef} className="relative py-16 h-[400vh]">
      <div className="sticky -top-[10%] h-screen flex items-center justify-center">
        <div className="w-full px-5 lg:px-16">
          <SectionHeading
            title={'Mediation That Works For You'}
            subTitle={
              'No matter the conflict, resolution starts with listening. At Global Mediation, we believe that understanding and perspective can shift even the most challenging conversations. We do not take sides, we create safe, supportive spaces where every voice is heard and respected. Through open dialogue and impartial guidance, we help people find common ground and work toward outcomes that benefit everyone involved.'
            }
            className="mb-8"
          />
          <div className="grid grid-cols-1 mt-[80px] md:grid-cols-4 gap-4">
            {mediationCards.map((card, index) => (
              <MediationCard key={index} title={card.title} subTitle={card.subTitle} icon={null} active={activeCardIndex === index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediationCards;
