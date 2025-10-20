'use client';
import CTA from '@/components/shared/CTA';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import inclusion from '/public/global_2025-76.jpg';
import Quality from '/public/global_2025-113.jpg';
import Integrity from '/public/global_2025-63.jpg';

const headerBG = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-38.jpg';
const values = [
  {
    title: 'Quality',
    text: 'We listen and learn and go the extra mile to provide outstanding service to our clients.',
    img: Quality,
  },
  {
    title: 'Impact',
    text: 'We make the world a better place by resolving harmful conflict and improving relationships.',
    img: 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-26.jpg',
  },
  {
    title: 'Inclusion',
    text: 'We celebrate difference and encourage inclusivity.',
    img: inclusion,
  },
  {
    title: 'Teamwork',
    text: 'We create strong healthy relationships and work together to encourage each other’s growth.',
    img: 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-44.jpg',
  },
  {
    title: 'Integrity',
    text: 'We do what we say we will do and act ethically and honestly.',
    img: Integrity,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Page = () => {
  return (
    <div className="bg-[#F9F8FF]">
      {/* ==== HEADER ==== */}
      <header
        style={{
          backgroundImage: `linear-gradient(to right, rgba(62,0,101,0.65), rgba(62,0,101,0.15)), url('${headerBG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
        className="pt-[187px] max-h-[1050px]  h-screen custom-gradient-bg bg-[center] sm:bg-[center_top] lg:bg-bottom max-sm:bg-[35%_center] relative md:pt-[238px] flex items-center pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div>
          <h1 className="font-semibold tracking-[-2%] max-w-[900px] leading-[120%] text-4xl md:text-[60px] xl:text-[4vw] text-white">
            Global’s Brand Values
          </h1>
          <p className="text-white mt-[25px] md:mt-4 mb-[25px] mr-auto max-w-[700px] md:mb-10 w-[100%] font-normal text-base md:text-lg xl:text-xl">
            At Global Mediation, our values guide everything we do, from how we support people through challenging situations, to the care
            and commitment we bring to every conversation. They reflect the service we aim to deliver, and the impact we hope to have.
          </p>
        </div>
      </header>

      {/* ==== GRID SECTION ==== */}
      <section className="py-20 px-5 md:px-16 bg-white">
        <div className="max-w-[1300px] mx-auto grid gap-12 md:gap-16 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-16">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl bg-[#F9F8FF] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col lg:basis-1/3 lg:max-w-[430px]"
            >
              <div className="h-[220px] w-full relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={`object-cover w-full h-full absolute rounded-tl-3xl rounded-tr-3xl ${
                    values?.length === idx + 1 ? '-top-12' : 'top-0'
                  }`}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="font-semibold text-[#43006A] text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==== CTA ==== */}
      <div className="bg-gradient-to-b from-[#F3EEFF] to-[#ffffff]">
        <CTA
          title="Let’s find a way forward, together"
          subTitle="For more information about our services, team, training programmes, or career opportunities, get in touch with us."
          Button1Link="/contact"
          Button1Text="Contact us"
        />
      </div>
    </div>
  );
};

export default Page;
