'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const TeamPageCarousel = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`flex justify-center translate-y-1/2 -translate-x-full absolute -bottom-[12.5px] border border-[#9C9C9C] right-[50px] md:right-[75px] z-30 items-center text-[#9C9C9C]  rounded-full hover:bg-secondary hover:border-secondary  hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12`}
        onClick={onClick}
      >
        <ArrowLeft />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`flex justify-center translate-y-1/2 absolute -bottom-[12.5px] border border-[#9C9C9C] right-10 md:right-[60px] z-30   items-center text-[#9C9C9C]  rounded-full hover:bg-secondary hover:border-secondary hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12`}
        onClick={onClick}
      >
        <ArrowRight />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: i => <div className=" w-2  h-2 rounded-full bg-[#F3F1FF]"></div>,
  };

  return (
    <section className="about py-16 md:py-[80px] px-5 md:px-16">
      <div className="mb-12 md:mb-[80px]">
        <h1 className="mb-5 font-semibold text-4xl md:text-5xl">Our team</h1>
        <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div>
        <div className="team-caousel">
          <div className="slider-container">
            <Slider {...settings}>
              {[1, 2].map(item => (
                <div className="" key={item}>
                  <div className="grid grid-cols-4 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                      <div key={item} className="col-span-4 md:col-span-2 lg:col-span-1 mb-[30px] md:mb-[60px]">
                        <div className="w-full h-[290px] bg-gray-600 rounded-xl"></div>
                        <h3 className={`text-black' mt-6 md:mt-6 mb-4 text-lg md:text-[20px] font-semibold `}>Adam Gersch</h3>
                        <p className={`text-black' leading-[150%] text-sm font-normal `}>
                          ‘He is committed to delivering first-rate services to clients and his sparkling personality always shines through
                          and brings a smile.’
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPageCarousel;
