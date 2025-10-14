'use client';
import CTA from '@/components/shared/CTA';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const headerBG = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-38.jpg';
const service1 = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-33.jpg';
const impact = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-26.jpg';
const Inclusion = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-16.jpg';
const Teamwork = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-44.jpg';
const Integrity = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-63.jpg';

const values = [
  {
    title: 'Quality',
    text: 'We listen and learn and go the extra mile to provide outstanding service to our clients.',
    img: service1,
    reverse: false,
  },
  {
    title: 'Impact',
    text: 'We make the world a better place by resolving harmful conflict and improving relationships.',
    img: impact,
    reverse: true,
  },
  {
    title: 'Inclusion',
    text: 'We celebrate difference and encourage inclusivity.',
    img: Inclusion,
    reverse: false,
  },
  {
    title: 'Teamwork',
    text: 'We create strong healthy relationships and work together to encourage each other’s growth.',
    img: Teamwork,
    reverse: true,
  },
  {
    title: 'Integrity',
    text: 'We do what we say we will do and act ethically and honestly.',
    img: Integrity,
    reverse: false,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const page = () => {
  return (
    <div className="bg-[#F9F8FF]">
      {/* ==== HEADER (Unchanged) ==== */}
      <header
        style={{
          backgroundImage: `url('${headerBG}'), linear-gradient(to right, rgba(62,0,101,0.60) 1.68%, rgba(62,0,101,0.15) 69.4%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
        className="pt-[187px] max-h-[850px] h-screen bg-no-repeat flex justify-center relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full lg:max-w-[1318px] mx-auto relative z-10 flex items-center">
          <h1 className="font-semibold tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw] text-white">
            Global's Brand Values
          </h1>
        </div>
      </header>

      {/* ==== VALUE SECTIONS ==== */}
      {values.map((item, idx) => (
        <section key={idx} className={`${idx % 2 === 0 ? 'bg-[#F9F8FF]' : 'bg-white'} py-20 md:py-28 px-5 md:px-16`}>
          <div
            className={`max-w-[1318px] mx-auto flex flex-col ${
              item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } items-center gap-12 md:gap-20`}
          >
            {/* Image */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg"
            >
              <Image width={1200} height={1200} src={item.img} alt={item.title} className="object-cover w-full h-[300px] md:h-[480px]" />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
            >
              <h2 className="font-semibold text-[#43006A] leading-[120%] tracking-[-2%] text-4xl md:text-[42px] mb-6">{item.title}</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal">{item.text}</p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ==== CTA ==== */}
      <div className="bg-gradient-to-b from-[#F3EEFF] to-[#ffffff]">
        <CTA
          title={'Let’s find a way forward, together'}
          subTitle={'For more information about our services, team, training programmes, or career opportunities, get in touch with us.'}
          Button1Link={'/contact'}
          Button1Text={'Contact us'}
        />
      </div>
    </div>
  );
};

export default page;
