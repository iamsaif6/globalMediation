'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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

const Accredited = () => {
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
          slidesToShow: 3,
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
    <section className="py-16 px-5 md:px-16 md:py-[80px] ">
      <div className={` max-w-[850px] mx-auto text-left  md:text-center`}>
        <h2 className="font-medium  leading-[120%] tracking-[-4%] text-4xl md:text-[40px] lg:text-5xl mb-5 md:mb-6">
          Recognised and trusted <br /> across the UK
        </h2>
        <p className={`text-black text-base md:text-lg font-normal`}>
          We are proud to be accredited by the Civil Mediation Council, and trusted by leading organisations across the UK, from public
          sector bodies to national charities and corporate clients.
        </p>
      </div>
      {/* <div className="grid gap-[30px] mt-8 mb-16  md:my-[80px] grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-[20px] md:text-[32px] font-medium mb-6 md:mb-8">Partners include:</h2>
          <ul className="space-y-3 md:space-y-6">
            <li>
              <Link
                title="Local authorities across the UK"
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>Local authorities across the UK</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link
                title="Educational institutions"
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>Educational institutions</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link
                title="Businesses and community organisations"
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>Businesses and community organisations</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-[20px] md:text-[32px] font-medium mb-6 md:mb-8">Accreditation</h2>
          <ul className="space-y-3 md:space-y-6">
            <li>
              <Link
                title="Civil Mediation Council"
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>Civil Mediation Council</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
            <li>
              <Link
                title="College of Mediators"
                className="flex duration-200 hover:bg-secondary hover:text-white hover:border-secondary items-center text-black rounded-xl text-base md:text-lg justify-between p-4 md:p-[21px] border border-[#DAD3FF]"
                href={'#'}
              >
                <span>College of Mediators</span>
                <ArrowUpRight strokeWidth={1.3} />
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      {/* Partner */}
      {/* <div className="flex items-center justify-between flex-wrap gap-3 md:gap-8">
        <Image alt="Partner" src={image1} />
        <Image alt="Partner" src={image2} />
        <Image alt="Partner" src={image3} />
        <Image alt="Partner" src={image4} />
        <Image alt="Partner" src={image5} />
        <Image alt="Partner" src={image1} />
        <Image alt="Partner" src={image2} />
      </div> */}

      <div className="py-10 pb-0  md:pb-10 relative">
        {/* Navigation Arrows */}

        <button
          onClick={goPrev}
          className="bg-gray-200 hover:bg-primary hover:text-white p-2 md:p-3 rounded-full shadow-md transition-colors cursor-pointer z-10 absolute mt-3 md:mt-0 left-0 top-1/2 -translate-y-1/2"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goNext}
          className="bg-gray-200 hover:bg-primary hover:text-white p-2 md:p-3 rounded-full shadow-md transition-colors z-10 cursor-pointer absolute right-0 mt-3 md:mt-0 top-1/2 -translate-y-1/2"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="mb-6 md:mb-12 max-w-[300px] w-full md:max-w-[900px] mx-auto">
          <Slider ref={topSliderRef} {...topSliderSettings}>
            {topRowItems.map((item, index) => (
              <div key={`top-${index}`} className="px-1">
                <div className="w-full h-16 md:h-24  flex items-center justify-center ">
                  <img className="w-full 2xl:max-w-[160px] max-w-[120px] h-full object-contain" src={item.src} alt="Company Logo" />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className=" max-w-[300px] w-full lg:max-w-[1100px] 2xl:max-w-[1400px] mx-auto">
          <Slider ref={bottomSliderRef} {...bottomSliderSettings}>
            {bottomRowItems.map((item, index) => (
              <div key={`bottom-${index}`} className="px-1 ">
                <div className="w-full h-16 md:h-24 flex items-center justify-center ">
                  <img
                    title="Company Logo"
                    className="w-full h-full 2xl:max-w-[160px] max-w-[120px] object-contain object-center"
                    src={item.src}
                    alt="Company Logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Accredited;
