'use client';
import React, { useRef } from 'react';
import SectionHeading from '../shared/SectionHeading';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '/public/logos/Bath and North East Somerset.png';
import img2 from '/public/logos/Bournemouth.png';
import img3 from '/public/logos/Bracknell Forest.png';
import img4 from '/public/logos/Brighton and Hove.png';
import img5 from '/public/logos/Bristol.png';
import img6 from '/public/logos/Bromley.jpg';
import img7 from '/public/logos/Buckinghamshire.png';
import img8 from '/public/logos/Cornwall.png';
import img9 from '/public/logos/Devon.png';
import img10 from '/public/logos/Dorset.jpg';
import img11 from '/public/logos/East Sussex.png';
import img12 from '/public/logos/Essex.png';
import img13 from '/public/logos/Gloucestershire.jpg';
import img14 from '/public/logos/Isles of Scilly.png';
import img15 from '/public/logos/Kent.png';
import img16 from '/public/logos/Lancashire.png';
import img17 from '/public/logos/Medway.jpg';
import img18 from '/public/logos/Merton.png';
import img19 from '/public/logos/Milton Keynes.png';
import img20 from '/public/logos/North Somerset.jpg';
import img21 from '/public/logos/Oxfordshire.png';
import img22 from '/public/logos/Plymouth.png';
import img23 from '/public/logos/Poole.jpg';
import img24 from '/public/logos/Portmouth.png';
import img25 from '/public/logos/reading.png';
import img26 from '/public/logos/SLough.png';
import img27 from '/public/logos/Somerset.png';
import img28 from '/public/logos/South Gloucester.png';
import img29 from '/public/logos/Southampton.jpg';
import img30 from '/public/logos/Surrey.jpg';
import img31 from '/public/logos/Swindon.jpg';
import img32 from '/public/logos/Thurrock.jpg';
import img33 from '/public/logos/Torbay.jpg';
import img34 from '/public/logos/West Sussex.png';
import img35 from '/public/logos/Wiltshire.jpg';
import img36 from '/public/logos/Windsor and Maidenhead.png';
import img37 from '/public/logos/Wokingham.png';

const Serving = () => {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  // Sample items (replace with your actual data)
  const topRowItems = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  const bottomRowItems = [
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
  ];

  // Settings for top slider
  const topSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Settings for bottom slider
  const bottomSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: false,
    rtl: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const goNext = () => {
    topSliderRef.current.slickNext();
    bottomSliderRef.current.slickPrev();
  };

  const goPrev = () => {
    topSliderRef.current.slickPrev();
    bottomSliderRef.current.slickNext();
  };

  return (
    <section className="py-16 md:pb-16 md:pt-28 px-5 md:px-16 relative">
      <SectionHeading
        title={'Serving Communities Across the UK'}
        subTitle={
          'Global Mediation delivers impartial and accessible services to communities throughout the UK. We work across public, private and voluntary sectors, helping people from all walks of life approach conflict with confidence, and work toward solutions that feel fair, respectful and lasting'
        }
        center={true}
      />

      <div className="py-10 pb-0  md:pb-10 relative">
        {/* Navigation Arrows */}

        <button
          onClick={goPrev}
          className="bg-gray-200 hover:bg-primary hover:text-white p-3 rounded-full shadow-md transition-colors cursor-pointer absolute left-0 top-1/2 -translate-y-1/2"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goNext}
          className="bg-gray-200 hover:bg-primary hover:text-white p-3 rounded-full shadow-md transition-colors cursor-pointer absolute right-0 top-1/2 -translate-y-1/2"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="mb-14 max-w-[800px] mx-auto">
          <Slider ref={topSliderRef} {...topSliderSettings}>
            {topRowItems.map((item, index) => (
              <div key={`top-${index}`} className="px-1">
                <div className="w-full h-24  flex items-center justify-center ">
                  <img className="w-full max-w-20 h-full object-contain" src={item.src} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <Slider ref={bottomSliderRef} {...bottomSliderSettings}>
            {bottomRowItems.map((item, index) => (
              <div key={`bottom-${index}`} className="px-1">
                <div className="w-full h-24  flex items-center justify-center ">
                  <img className="w-full h-full max-w-20 object-contain object-center" src={item.src} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Serving;
