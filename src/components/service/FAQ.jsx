'use client';
import React, { useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import Link from 'next/link';
import Button from '../shared/Button';

const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <article
      className={`${
        isActive ? 'bg-[#F3F1FF] border-secondary' : 'border-[#DAD3FF]'
      } mb-[19px] md:mb-3 p-[22px] md:py-6 md:px-6 rounded-xl border `}
    >
      <div onClick={onClick} className="flex justify-between items-center cursor-pointer rounded-md">
        <div className={`${isActive ? 'font-medium  ' : 'font-normal'} text-base md:text-lg `}>
          <h3>{question}</h3>
        </div>
        {isActive ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M25.3346 15.667V16.3336C25.3346 16.7018 25.0362 17.0003 24.668 17.0003H17.0013V24.667C17.0013 25.0351 16.7028 25.3336 16.3346 25.3336H15.668C15.2998 25.3336 15.0013 25.0351 15.0013 24.667V17.0003H7.33464C6.96645 17.0003 6.66797 16.7018 6.66797 16.3336V15.667C6.66797 15.2988 6.96645 15.0003 7.33464 15.0003H15.0013V7.33365C15.0013 6.96546 15.2998 6.66699 15.668 6.66699H16.3346C16.7028 6.66699 17.0013 6.96546 17.0013 7.33365V15.0003H24.668C25.0362 15.0003 25.3346 15.2988 25.3346 15.667Z"
              fill="#43006A"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 16H24" stroke="#43006A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      {isActive && (
        <div className="mt-2 w-full md:w-[90%] text-black text-base md:text-lg leading-[150%]">
          <p>{answer}</p>
        </div>
      )}
    </article>
  );
};

const FAQ = ({ faqData, buttonText, buttonLink, title }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleItemClick = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <section className="py-16 bg-[#F9F8FF] px-5 items-center md:px-16 md:py-[80px]">
      <h2 className={`font-medium text-center   mx-auto leading-[120%] tracking-[-4%] text-4xl  md:text-5xl mb-5 md:mb-6`}>{title}</h2>
      <div className=" mt-[80px] md:my-10">
        {faqData.map(faq => (
          <FaqItem
            key={faq.key}
            question={faq.question}
            answer={faq.answer}
            isActive={activeIndex === faq.key}
            onClick={() => handleItemClick(faq.key)}
          />
        ))}
      </div>
      <div className="flex mt-[43px] md:mt-0 flex-col items-center">
        <Link href={'#'} className="text-lg mb-[30px]">
          Have more questions?
        </Link>
        <Button title={buttonText} href={buttonLink} />
      </div>
    </section>
  );
};

export default FAQ;
